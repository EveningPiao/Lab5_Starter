# Lab 5 - Starter
TianLin Zhao

1. Would you use a unit test to test the "message" feature of a messaging application? Why or why not? For this question, assume the "message" feature allows a user to write and send a message to another user.

   No, a unit test alone is not the right tool for "send a message" feature. Sending a message is an interaction that depends on multiple aspects such as network requests. A unit test only exercises a single function or module in isolation, so it cannot verify that all of layers actually work together. This feature is better covered by integration, where the full flow (typing a message, hitting send, the recipient receiving it) can be validated. Unit tests can still be useful for the small, pure values inside the feature, but they cannot validate the feature as a whole.

2. Would you use a unit test to test the "max message length" feature of a messaging application? Why or why not? For this question, assume the "max message length" feature prevents the user from typing more than 80 characters.

   Yes, this is a great candidate for a unit test. The "max message length" rule is a self-contained piece of logic with deterministic outputs. It can be tested quickly and reliably in isolation. It is also easy to cover the important edge cases with unit tests — empty strings, exactly 80 characters, 81 characters, multi-byte... — to make sure the boundary behavior is correct. That kind of focused boundary checking is exactly what unit tests are good at.
