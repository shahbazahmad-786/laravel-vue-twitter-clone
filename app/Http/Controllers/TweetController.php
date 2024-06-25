<?php

namespace App\Http\Controllers;

use App\Models\Tweet;
use Illuminate\Support\Str;
use Illuminate\Http\UploadedFile;
use App\Http\Requests\TweetRequest;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\Storage;

class TweetController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = Tweet::query()
            ->with('user')
            ->orderBy('created_at', 'desc')
            ->get();

        return $data;
    }

    public function search()
    {
        $search = request('search', '');
        return Tweet::query()
            ->where('tweet', 'like', "%{$search}%")
            ->with('user')
            ->get();
    }

    public function getForProfile()
    {
        $userId = Auth::user()->id;

        $data = Tweet::query()
            ->where('user_id', $userId)
            ->with('user')
            ->orderBy('created_at', 'desc')
            ->get();

        return $data;
    }

    public function getForPeople($user)
    {
        $people = User::query()->where('id', $user)->get();

        $tweets = Tweet::query()
            ->where('user_id', $user)
            ->with('user')
            ->orderBy('created_at', 'desc')
            ->get();

        return response([
            'people' => $people,
            'tweets' => $tweets
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(TweetRequest $request)
    {
        $data = $request->validated();

        $data['user_id'] = $request->user()->id;
        $data['tweet'] = $request->tweet;

        $file = $data['file'] ?? null;

        if ($file) {
            $relativePath = $this->saveFile($file);
            $data['file'] = URL::to(Storage::url($relativePath));
            $data['is_video'] = $file->getClientOriginalExtension() === 'mp4' ? true : false;
        }

        $tweet = Tweet::create($data);

        return $tweet;
        // $file = null;
        // $extension = null;
        // $fileName = null;
        // $path = '';

        // if ($request->hasFile('file')) {
        //     $file = $request->file('file');
        //     $request->validate(['file' => 'required|mimes:png,jpg,jpeg,mp4']);
        //     $extension = $file->getClientOriginalExtension();
        //     $fileName = time() . '.' . $extension;
        //     $extension === 'mp4' ? $path = '/videos/' : $path = '/images/';
        // }

        // $tweet = new Tweet;

        // $tweet->tweet = $request->input('tweet');
        // $tweet->user_id = $request->user()->id;
        // if ($fileName) {
        //     $tweet->file = $path . $fileName;
        //     $tweet->is_video = $extension === 'mp4' ? true : false;
        //     $file->move(public_path() . $path, $fileName);
        // }

        // $tweet->save();
    }

    /**
     * Display the specified resource.
     */
    public function show($tweet)
    {
        return Tweet::query()
            ->where('id', $tweet)
            ->with('user')
            ->get();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Tweet $tweet)
    {
        if (!is_null($tweet->file) && file_exists(public_path() . $tweet->file)) {
            unlink(public_path() . $tweet->file);
        }

        $tweet->delete();

        return response()->noContent();
    }

    private function saveFile(UploadedFile $file)
    {
        $extension = $file->getClientOriginalExtension();
        $path = $extension === 'mp4' ? 'videos/' . Str::random() : 'images/' . Str::random();

        if (!Storage::exists($path)) {
            Storage::makeDirectory($path, 0755, true);
        }

        if (!Storage::putFileAs('public/' . $path, $file, $file->getClientOriginalName())) {
            throw new \Exception("Unable to save file \"{$file->getClientOriginalName()}\"");
        }

        return $path . '/' . $file->getClientOriginalName();
    }
}
