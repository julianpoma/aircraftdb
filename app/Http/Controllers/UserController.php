<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use JWTAuth;
use Validator;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('jwt.auth', ['except' => ['login']]);
    }

    /**
     * Authenticate an user.
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        $validator = Validator::make($credentials, [
            'email' => 'required|email',
            'password' => 'required'
        ]);

        if ($validator->fails()) {
            return response()
                ->json([
                    'message' => 'Validation failed.',
                    'errors' => $validator->errors()
                ], 422);
        }

        $token = JWTAuth::attempt($credentials);

        if ($token) {
            return response()->json(['token' => $token]);
        } else {
            return response()->json(['message' => 'Invalid credentials.'], 401);
        }
    }

    /**
     * Get the user by token.
     *
     * @param  Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function getUser(Request $request)
    {
        $user = JWTAuth::parseToken()->authenticate();
        return response()->json($user);
    }

    public function logout(Request $request) {
        $token = JWTAuth::getToken();
        JWTAuth::invalidate($token);
        return response()->json(['message' => 'The token has been blacklisted'], 200);
    }
}
