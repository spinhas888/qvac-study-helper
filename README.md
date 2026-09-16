# QVAC Study Helper

A privacy-first local AI study helper powered by Tether's QVAC SDK.

QVAC Study Helper lets students ask study questions and receive AI-generated answers directly on their device. The AI inference runs locally using QVAC, so no cloud AI API or external AI service is required.

## Features

- Local on-device AI inference
- Study question and answer assistant
- Privacy-first design
- No cloud AI API required
- Simple Node.js command-line interface

## QVAC SDK

This project uses:

@qvac/sdk version 0.19.1

The application loads a local model with the QVAC SDK and uses QVAC completion functionality to generate study answers on-device.

## Requirements

- Node.js
- npm
- A device capable of running the QVAC local model

## Installation

Clone the repository:

git clone https://github.com/spinhas888/qvac-study-helper.git

Enter the project directory:

cd qvac-study-helper

Install dependencies:

npm install

## Run

Start the study helper with:

node index.js

The QVAC SDK may download the required local model the first time the application runs.

## Privacy

AI inference is performed locally on the user's device through QVAC. Study questions do not need to be sent to a cloud AI provider.

## Built With

- Node.js
- @qvac/sdk 0.19.1
- Tether QVAC

## License

This project is open source and will be released under the MIT License.

