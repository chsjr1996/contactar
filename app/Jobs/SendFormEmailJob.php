<?php

namespace App\Jobs;

use App\Mail\ContactFormMailable;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Mail;

class SendFormEmailJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    private array $data;

    private string $mailTo;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(array $data, string $mailTo)
    {
        $this->data = $data;
        $this->mailTo = $mailTo;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $formMaiable = new ContactFormMailable(
            $this->data['name'],
            $this->data['email'],
            $this->data['phone'],
            $this->data['message'],
            $this->data['file_name']
        );

        Mail::to($this->mailTo)->send($formMaiable);
    }
}
