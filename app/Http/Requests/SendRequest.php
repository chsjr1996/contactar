<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SendRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'string|required',
            'email' => 'email|required',
            'phone' => 'string|required|regex:/^(\(?\d{2}\)?\s)?(\d{4,5}\-?\d{4})$/i',
            'ip' => 'string|required',
            'message' => 'string|required',
            'attachment' => 'file|required|mimes:pdf,doc,docx,odt,txt|max:62.5',
        ];
    }
}
