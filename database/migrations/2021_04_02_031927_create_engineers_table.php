<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Enums\EngineerStatus;

class CreateEngineersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('engineers', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('user_id');
            $table->string('name');
            $table->integer('engineer_category_id')->unsigned();
            $table->string('content');
            $table->string('start');
            $table->enum('status', EngineerStatus::getKeys());
            $table->string('git_hub_url')->nullable();
            $table->timestamps();

            $table->foreign('engineer_category_id')->references('id')->on('engineer_categories');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('engineers');
    }
}
