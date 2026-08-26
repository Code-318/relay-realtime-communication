# Relay

A real-time communication platform designed for educational environments.

## Overview

Relay is a web-based real-time communication platform built to explore
authentication, database design, real-time systems, file storage and
access control.

The current system supports authenticated accounts, real-time messaging,
file sharing and administrative moderation tools.

## Features

- Real-time messaging
- User authentication and email verification
- User profiles
- File and image sharing
- Administrative announcements
- Message deletion
- User muting
- User removal
- Firebase-backed persistent data
- Firebase Cloud Storage for attachments

## Technology

- HTML
- CSS
- JavaScript
- Firebase Authentication
- Firebase Realtime Database
- Firebase Cloud Storage

## Architecture

```text
Client
  │
  ├── Firebase Authentication
  │
  ├── Realtime Database
  │     ├── users
  │     └── messages
  │
  └── Cloud Storage
        └── uploads
