# Chrome Extension Examples
This is a collect of some simple Chrome Extension examples for a presentation.

## make-red
Uses a "content-scripts" match to inject JavaScript into every page and turn the background color red.

## make-red-on-click
Has a simple UI that allows the user to inject JavaScript into the current tab that turns the background color red.

## react-message-send
Has as simple UI written in React that sends a message to the background thread. The background thread console.logs the message as proof. You can visit [chrome://extensions](chrome://extensions) to open dev tools on the background thread and see the messages.

## tab-opener
Has a simple UI the opens a new tab to google.com on click.

## unsafe-react-message-send
Same as react-message-send but uses Babel to allow the script to use JSX. Babel uses `eval` and other unsafe method to do its work here to we have to add a `content_security_policy` detailing the unsafe methods. Chrome even requires that we give the SHA-Hash of the script to limit exposure to cross-site scripting attacks.

## url-tracker
Monitors all urls the user visits and stores any that match a pattern. The UI then shows a list of the visited urls.

