<?php

namespace App\Http\Controllers;

use App\Aircraft;
use Illuminate\Http\Request;

class AircraftsController extends Controller
{
    public function all() {
        $aircrafts = Aircraft::all();

        return response()->json([
            'aircrafts' => $aircrafts
        ], 200);

    }

    public function show($id) {
        $aircraft = Aircraft::findOrFail($id);

        if(!$aircraft) {
            return response()->json([
                'message' => 'Aircraft not found'
            ], 404);
 
        } else {
            return response()->json([
                'aircraft' => $aircraft
            ], 200);
        }
        
    }

    public function new(Request $request) {

        $aircraft = Aircraft::create($request->all());

        return response()->json(['aircraft' => $aircraft], 201);
    }

    public function edit(Request $request, $id) {
        $aircraft = Aircraft::find($id);

        if(!$aircraft) {
            return response()->json([
                'message' => 'Aircraft not found.'
            ], 404);
        } 
        
        else {
            $aircraft->update($request->input()); 
            return response()->json([
                'message' => 'Aircraft updated',
                'aircraft' => $aircraft
            ], 200);
        }
    }

    public function delete($id) {
        
        Aircraft::findOrFail($id)->delete();

        return response()->json([
            'message' => 'Aircraft deleted successfully'
        ], 200);
    }
}
