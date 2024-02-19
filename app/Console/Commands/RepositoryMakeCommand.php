<?php
/*
 *  ............(¯''•.
 *  ..............(¯'•(¯'•............_/)/)
 *  ...............(¯'•.(¯'•.......((.....((
 *  ................(¯''•(¯'•...((.)..(. ‘ /)
 *  .................(¯''•.(¯'((.)....|\_/
 *  .....,,,~”¯¯¯''¯(_¸´(_.)......|
 *  ...(((./...........................)__
 *  ..((((.\......),,...........(...../__'\
 *  ..))))..\ . .//...¯¯¯¯¯¯¯' \.../... / /
 *  .(((...../ .// .............. | ./...../
 *  .))).....| ||.................| |...........♥♥♥
 *  ((........) \.................) \...........\|/
 *  .^^^^.""'"'.^^^^^^^..""".^^^^.""""
 *  ( ͡° ͜ʖ ͡°( ಠ ͜ʖ ಠ ) ͡° ͜ʖ ͡°) ( ͡° ͜ʖ ͡°( ಠ ͜ʖ ಠ ) ͡° ͜ʖ ͡°) ( ͡° ͜ʖ ͡°( ಠ ͜ʖ ಠ ) ͡° ͜ʖ ͡°)
 *  ≧◔◡◔≦ ≧◔◡◔≦ ≧◔◡◔≦ ≧◔◡◔≦ ≧◔◡◔≦ ≧◔◡◔≦ ≧◔◡◔≦ ≧◔◡◔≦
 *  
 *  Copyright © 2009-2021 Lê Duy Khoa. All rights reserved.
 *  Mail: leduykhoa060690@gmail.com
 *  Skype: leduykhoa060690
 *  Website: http://web-fast.com
 *  Mobile: +84973421508
 *  Telegram: https://t.me/leduykhoa
 *  GitHub: https://github.com/leduykhoa
 *  Date: 2021/03/06
 *  Time: 11:15:05
 */

namespace App\Console\Commands;

use Illuminate\Console\GeneratorCommand;
use Illuminate\Support\Str;
use Symfony\Component\Console\Input\InputOption;

class RepositoryMakeCommand extends GeneratorCommand
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    // protected $signature = 'make:repository {name} {--force=*} {--interface=*}';
    protected $name = 'make:repository';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create a new model repository';

    /**
     * The type of class being generated.
     *
     * @var string
     */
    protected $type = 'Repository';


    /**
     * Execute the console command.
     *
     * @return void
     */
    public function handle()
    {
        // function startsWith($haystack, $needle) {
        //     return substr_compare($haystack, $needle, 0, strlen($needle)) === 0;
        // }
        // function endsWith($haystack, $needle) {
        //     return substr_compare($haystack, $needle, -strlen($needle)) === 0;
        // }
        $name = $this->getNameInput();
        $needle = $this->type;
        if (substr($name, -strlen($needle)) !== $needle) {
            $this->error('The name "' . $this->getNameInput() . '" not end with "' . $needle . '".');
            return false;
        }
        if (parent::handle() === false && !$this->option('force')) {
            return;
        }

        if ($this->option('interface')) {
            $this->createRepositoryInterface();
            return;
        }
    }

    /**
     * Replace the class name for the given stub.
     *
     * @param  string  $stub
     * @param  string  $name
     * @return string
     */
    protected function replaceClass($stub, $name)
    {
        $nameClass = $this->getNameInput();
        $stub = parent::replaceClass($stub, $name);
        $stub = str_replace('__YEAR__', date('Y'), $stub);
        $stub = str_replace('__MONTH__', date('m'), $stub);
        $stub = str_replace('__DAY__', date('d'), $stub);
        $stub = str_replace('__HOUR__', date('H'), $stub);
        $stub = str_replace('__MINUTE__', date('i'), $stub);
        $stub = str_replace('__SECOND__', date('s'), $stub);
        $stub = str_replace('__CLASS_NAME__', str_replace($this->type, '', $nameClass), $stub);

        return $stub;
    }

    protected function createRepositoryInterface()
    {
        $repositoryName = Str::studly(class_basename($this->getNameInput()));
        $command = 'make:repository-interface';
        $options = [
            'name' => "{$repositoryName}Interface"
        ];
        if ($this->option('force')) {
            $options['--force'] = true;
        }
        return $this->call($command, $options);
    }

    /**
     * 
     * Get the stub file for the generator.
     *
     * @return string
     */
    protected function getStub()
    {
        return  base_path('stubs/repository.stub');
    }
    /**
     * Get the default namespace for the class.
     *
     * @param  string  $rootNamespace
     * @return string
     */
    protected function getDefaultNamespace($rootNamespace)
    {
        return $rootNamespace . '\Repositories';
    }

    /**
     * Get the console command options.
     *
     * @return array
     */
    protected function getOptions()
    {
        return [
            ['force', 'f', InputOption::VALUE_NONE, 'Create the class even if the repository already exists.'],
            ['interface', 'i', InputOption::VALUE_NONE, 'Create a new interface for the repository.'],
        ];
    }
}
