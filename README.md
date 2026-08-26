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
 Authentication
 Real-time messaging
 File uploads
 Moderation tools
 Realtime Database integration
 Cloud Storage integration
### Security
 Trusted role-based authorisation
 Persistent bans
 Input validation
 Rate limiting
 Audit logging
 Improved Firebase Security Rules
### Production
 Automated testing
 Error handling and monitoring
 Improved documentation
 Production deployment
### Potential School Deployment
 Define requirements with school
 School-specific authentication
 Moderation/reporting system
 Privacy and data-retention design
 Pilot deployment
 
## Project Goals

The goal of Relay is to develop a practical understanding of
real-time systems, backend architecture, authentication, security and
software engineering through a project that could potentially be used
in a real environment.

## Status

🚧 Active development
