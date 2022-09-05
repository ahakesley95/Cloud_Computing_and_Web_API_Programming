<?php

function get_pictures($directory, $extension) {
    $working_dir = getcwd();
    $img_dir = $working_dir . $directory;
    chdir($img_dir);
    $files = glob($extension);
    chdir($working_dir);

    foreach ($files as $file) {
        echo "<img src='" . $directory . $file . "'/>";
    }
}
?>