<?php

namespace App\Http\Controllers;

use App\Http\Requests\SendRequest;
use App\Models\Contact;
use App\Services\UploadFileService\UploadFileService;
use Inertia\Inertia;
use Inertia\Response;
use Symfony\Component\HttpFoundation\RedirectResponse;

class ContactController extends Controller
{
    /**
     * Display contact form.
     *
     * @return Response
     */
    public function form(): Response
    {
        return Inertia::render('Contact/form');
    }

    /**
     * Receive form data and persist it
     *
     * @param SendRequest $request
     * @return RedirectResponse
     */
    public function send(SendRequest $request): RedirectResponse
    {
        $filePath = UploadFileService::run($request->file('attachment'), 'files');

        $data = $request->toArray();
        $data['file_name'] = $filePath;

        (new Contact($data))->save();
        return redirect('/contact');
    }
}
