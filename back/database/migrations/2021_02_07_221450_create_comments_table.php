<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCommentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('comments', function (Blueprint $table) {
            $table->id();
            $table->string("text");
            $table->foreignId("post_id")->nullable();
            $table->foreignId("user_id")->nullable();
            $table->timestamps();
        });

        Schema::table('comments', function (Blueprint $table){
            $table->foreign('post_id')->references('id')
                  ->on('posts')->onDelete('cascade');
            $table->foreign('user_id')->references('id')
                  ->on('users')->onDelete('cascade');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('comments');
    }
}
