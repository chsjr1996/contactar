<?php

namespace App\Http\Controllers;

use App\Http\Requests\SendRequest;
use App\Repositories\Contracts\ContactRepositoryInterface;
use App\Services\Interfaces\UploadServiceInterface;
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
    public function send(
        SendRequest $request,
        ContactRepositoryInterface $repository,
        UploadServiceInterface $uploadService
    ): RedirectResponse {
        // 1º Step: Store file
        $filePath = $uploadService::run($request->file('attachment'), 'files');

        // 2º Step: Get all data
        $data = $request->toArray();
        $data['file_name'] = $filePath;
        unset($data['attachment']);

        // 3º Step: Store data
        $repository->insert($data);

        // 4º Send mail

        // Last Step: Redirect
        return redirect('/contact');
    }
}
