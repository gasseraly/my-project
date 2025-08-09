<?php
/**
 * Load environment variables from .env file
 */
class DotEnv
{
    protected $path;

    public function __construct(string $path)
    {
        if (!file_exists($path)) {
            // No .env file, we will rely on system-level env vars or defaults.
            return;
        }
        $this->path = $path;
    }

    public function load(): void
    {
        if ($this->path === null) {
            return;
        }

        if (!is_readable($this->path)) {
            throw new \RuntimeException(sprintf('%s file is not readable', $this->path));
        }

        $lines = file($this->path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
        foreach ($lines as $line) {
            if (strpos(trim($line), '#') === 0) {
                continue;
            }

            list($name, $value) = explode('=', $line, 2);
            $name = trim($name);
            $value = trim($value);

            if (!array_key_exists($name, $_SERVER) && !array_key_exists($name, $_ENV)) {
                putenv(sprintf('%s=%s', $name, $value));
                $_ENV[$name] = $value;
                $_SERVER[$name] = $value;
            }
        }
    }
}

// Load .env file from the project root
$dotenv = new DotEnv(__DIR__ . '/.env');
$dotenv->load();

/**
 * Gets the value of an environment variable.
 *
 * @param  string  $key
 * @param  mixed   $default
 * @return mixed
 */
function env($key, $default = null)
{
    $value = getenv($key);

    if ($value === false) {
        return $default;
    }

    switch (strtolower($value)) {
        case 'true':
        case '(true)':
            return true;
        case 'false':
        case '(false)':
            return false;
        case 'empty':
        case '(empty)':
            return '';
        case 'null':
        case '(null)':
            return null;
    }

    if (preg_match('/^"(.*)"$/', $value, $matches)) {
        return $matches[1];
    }

    return $value;
}
?>
