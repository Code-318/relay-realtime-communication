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
```

## Security

The application uses Firebase Authentication and server-enforced Firebase
Security Rules to control access to database and storage resources.

Security is an ongoing part of the project, with planned improvements
including stronger role-based access control, persistent bans, rate
limiting and audit logging.

## Roadmap

### Foundation
- [x] Authentication
- [x] Real-time messaging
- [x] File uploads
- [x] Moderation tools
- [x] Realtime Database integration
- [x] Cloud Storage integration

### Security
- [ ] Trusted role-based authorisation
- [ ] Persistent bans
- [ ] Input validation
- [ ] Rate limiting
- [ ] Audit logging
- [ ] Improved Firebase Security Rules

### Production
- [ ] Automated testing
- [ ] Error handling and monitoring
- [ ] Improved documentation
- [ ] Production deployment
 
## Project Goals

The goal of Relay is to develop a practical understanding of
real-time systems, backend architecture, authentication, security and
software engineering through a project that could potentially be used
in a real environment.

## Status

🚧 Active development
