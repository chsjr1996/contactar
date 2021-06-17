<?php

namespace App\Http\Controllers;

use App\Http\Requests\SendRequest;
use App\Mail\ContactFormMailable;
use App\Repositories\Contracts\ContactRepositoryInterface;
use App\Services\Interfaces\SendMailServiceInterface;
use App\Services\Interfaces\UploadServiceInterface;
use Inertia\Inertia;
use Inertia\Response;

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
     * @param UploadServiceInterface $uploadService
     * @param SendMailServiceInterface $mailService
     *
     * @return Response
     */
    public function send(
        SendRequest $request,
        ContactRepositoryInterface $repository,
        UploadServiceInterface $uploadService,
        SendMailServiceInterface $mailService
    ): Response {
        // 1º Step: Store file
        $filePath = $uploadService->run($request->file('attachment'), 'files');

        // 2º Step: Get all data
        $data = $request->toArray();
        $data['file_name'] = $filePath;
        unset($data['attachment']);

        // 3º Step: Store data
        $repository->insert($data);

        // 4º Send mail
        $mailService->run(
            new ContactFormMailable(
                $data['name'],
                $data['email'],
                $data['phone'],
                $data['message'],
                $filePath
            ),
            env('MAIL_TO_ADDRESS'),
            $data
        );

        // Render component with success message
        return Inertia::render('Contact/form', [
            'title' => 'Success!',
            'message' => 'Your message has sended.',
            'clearTime' => \Carbon\Carbon::now()
        ]);
    }
}
