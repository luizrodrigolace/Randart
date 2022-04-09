<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->string("text");
            $table->longText("media")->nullable(); /*longtext para media*/
            $table->integer("likes")->nullable();
            $table->string('category');
            $table->foreignId("user_id")->nullable();
            $table->timestamps();
        });

        Schema::table('posts', function (Blueprint $table){
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
        Schema::dropIfExists('posts');
    }
}
