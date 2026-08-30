---
title: "Syntax highlighting"
description: "A test post for code rendering — Python and Java, light and dark."
pubDate: 2026-08-31
tags: ["code"]
ai: true
---

A short test post to check the code highlighting. The colours now follow the
light/dark toggle in the top right — before, code blocks stayed dark in light
mode.

## Python

```python
from functools import lru_cache


@lru_cache(maxsize=None)
def fib(n: int) -> int:
    """Fibonacci number, memoised."""
    return n if n < 2 else fib(n - 1) + fib(n - 2)


class Counter:
    def __init__(self, start: int = 0) -> None:
        self._value = start

    def tick(self) -> int:
        self._value += 1
        return self._value


if __name__ == "__main__":
    print([fib(i) for i in range(10)])
```

## Java

```java
import java.util.List;
import java.util.stream.Collectors;

record Post(String title, int year, boolean draft) {}

public final class Blog {
    public static List<String> publishedTitles(List<Post> posts, int year) {
        return posts.stream()
                .filter(p -> !p.draft() && p.year() == year)
                .map(Post::title)
                .collect(Collectors.toList());
    }
}
```

## Shell

```sh
npm run build && rsync -a dist/ server:/var/www/blog/
```

## Inline

Inline code like `git rebase --onto` or `docker compose up -d` still uses the
body text colour, just with a subtle background.
