<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
use App\Comment;


class CommentRequest extends FormRequest
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
    public function rules(){
        if($this->isMethod('POST')){
            return[
                'text' => 'required|string',
            ];
        }   
        if($this->isMethod('PUT')) {
            return [
                'name' => 'string',
            ];
        }
    }
    public function messages(){
        return [
            'text.required' => 'O comentario não pode ser nulo',
        ];
    }
    protected function failedValidation(Validator $validator){
        throw new HttpResponseException(response()->json($validator->errors(), 422)); 
    }
}
