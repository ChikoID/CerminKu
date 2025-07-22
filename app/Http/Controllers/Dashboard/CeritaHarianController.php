<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\CeritaHarian;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class CeritaHarianController extends Controller
{
    public function index()
    {
        return Inertia::render('dashboard/cerita_harian', [
            'ceritas' => CeritaHarian::where('user_id', Auth::id())
                ->latest()
                ->get(),
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'message' => 'required',
            'mood' => 'required'
        ]);

        CeritaHarian::create([
            'user_id' => Auth::id(),
            'message' => $request->message,
            'mood' => $request->mood
        ]);

        return redirect()->back()->with('success', 'Cerita harian berhasil disimpan!');
    }

    public function destroy($id)
    {
        $cerita = CeritaHarian::where('user_id', Auth::id())->findOrFail($id);
        $cerita->delete();

        return redirect()->route('dashboard')->with('success', 'Cerita berhasil dihapus');
    }
}
