#!/usr/bin/env python

import asyncio

async def my_coroutine():
    """
    Python 3.5+ style to define a native coroutine
    """
    print ("Starting: my_coroutine()")
    await asyncio.sleep(1)
    print ("Completing my_coroutine()")

@asyncio.coroutine
def my_oldstyle_coroutine():
    """
    Python <3.5 style to define a generator-based coroutine
    """
    print ("Starting my_oldstyle_coroutine()")
    yield from asyncio.sleep(1)
    print ("Completing my_oldstyle_coroutine()")

async def main():
    await asyncio.gather(my_coroutine(), my_oldstyle_coroutine())

if __name__ == "__main__":
    asyncio.run(main())

