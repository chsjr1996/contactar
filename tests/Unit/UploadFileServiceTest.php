<?php

namespace Tests\Unit;

use App\Services\UploadFileService\UploadFileService;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Tests\TestCase;

class UploadFileServiceTest extends TestCase
{
    public function test_should_store_file_correctly()
    {
        $UploadedFile = new UploadedFile(
            storage_path('app/test_files/file_size_500kb.txt'),
            'file_size_500kb.txt'
        );

        $UploadFileService = new UploadFileService();
        $filePath = $UploadFileService->run($UploadedFile, 'test_files');

        $this->assertEquals(true, file_exists(storage_path("app/{$filePath}")));

        unlink(storage_path("app/{$filePath}"));
    }
}
