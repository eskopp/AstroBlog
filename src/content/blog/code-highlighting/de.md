---
title: "Syntax-Highlighting"
description: "Ein Testbeitrag für die Code-Darstellung – Python und Java, hell und dunkel."
pubDate: 2026-08-31
tags: ["code"]
urlSlug: "syntax-highlighting"
ai: true
---

Kurzer Testbeitrag, um das Code-Highlighting zu prüfen. Die Farben folgen jetzt
dem Hell-/Dunkel-Umschalter oben rechts – vorher blieben Code-Blöcke im
Hell-Modus dunkel.

## Python

```python
from functools import lru_cache


@lru_cache(maxsize=None)
def fib(n: int) -> int:
    """Fibonacci-Zahl, mit Memoisierung."""
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

Inline-Code wie `git rebase --onto` oder `docker compose up -d` steht weiterhin
in der Fließtext-Farbe, nur mit leichtem Hintergrund.
