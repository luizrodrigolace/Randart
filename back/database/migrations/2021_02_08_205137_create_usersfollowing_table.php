<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersfollowingTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('usersfollowing', function (Blueprint $table) {
            $table->id();
            $table->foreignId("following_id");
            $table->foreignId("follower_id");
            $table->timestamps();
        });

        Schema::table('usersfollowing', function (Blueprint $table){
            $table->foreign('following_id')->references('id')
                  ->on('users')->onDelete('cascade');
                  
            $table->foreign('follower_id')->references('id')
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
        Schema::dropIfExists('usersfollowing');
    }
}
