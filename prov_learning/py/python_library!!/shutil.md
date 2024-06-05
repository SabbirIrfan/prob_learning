# `shutil` Module in Python

The `shutil` module in Python provides a collection of high-level operations on files and collections of files. It is particularly useful for tasks involving copying and removal of files and directories, as well as for archiving and managing file permissions.

## Key Features of `shutil`

1. **File and Directory Operations**:
    - `shutil.copy(src, dst)`: Copies the file `src` to `dst`. The destination can be a directory or a file.
    - `shutil.copy2(src, dst)`: Similar to `shutil.copy` but also attempts to preserve the metadata (e.g., modification and access times).
    - `shutil.copyfile(src, dst)`: Copies the contents of `src` to `dst`. Both `src` and `dst` must be file paths.
    - `shutil.move(src, dst)`: Recursively moves a file or directory to another location.
    - `shutil.rmtree(path)`: Recursively deletes a directory tree.
    - `shutil.copytree(src, dst)`: Recursively copies an entire directory tree rooted at `src` to a directory named `dst`.

2. **Archiving Operations**:
    - `shutil.make_archive(base_name, format, root_dir)`: Creates an archive file (e.g., zip or tar) from all the files in and under `root_dir`. The archive's name will be `base_name` and the format will be specified by `format` (e.g., `zip`, `tar`).

3. **File System Space Usage**:
    - `shutil.disk_usage(path)`: Returns a named tuple with the total, used, and free space on the disk containing the given `path`.

4. **File Permissions**:
    - `shutil.chown(path, user=None, group=None)`: Changes the owner and group of the given path. This is only available on Unix.

## Examples of Using `shutil`

### Copying a File

```python
import shutil

src = 'source.txt'
dst = 'destination.txt'
shutil.copy(src, dst)