# SkillGraph — Graph-Powered Career Intelligence Platform

> WEXA AI Take-Home Assignment  
> A graph database application built using CognoDB, openCypher, Node.js, Express, and React.

---

## 🚀 Live Demo

### Hosted Application

**Frontend:**  
https://skillgraph-beta.vercel.app/

**Backend API:**  
https://skillgraph-api-one.vercel.app/

The frontend is deployed on Vercel and communicates with the Express backend through REST APIs. The backend connects to CognoDB using the Neo4j JavaScript driver and Bolt protocol.

---

## 🎥 Screen Recording

**Demo Video:**  
https://drive.google.com/drive/folders/1GqwI-wglLjBZPiETABUdBdrfhn8oA6WU?usp=sharing

The screen recording demonstrates:

- Opening the hosted SkillGraph application
- User skill information
- Career-role matching
- Matching skills
- Missing skills
- Graph-based relationships
- Frontend and backend interaction
- Career insights generated from CognoDB

---

# 📌 1. Project Overview

**SkillGraph** is a graph-powered career intelligence application that analyzes a user's technical skills and identifies suitable career roles and skill gaps.

The application models users, skills, career roles, technologies, and their relationships as a graph in **CognoDB**.

Instead of treating career information as isolated records, SkillGraph uses relationships between entities to perform graph traversals and generate career insights.

The system can answer questions such as:

- Which career roles best match a user's current skills?
- Which skills does the user already have?
- Which skills are missing for a particular career role?
- Which technologies are associated with a career role?
- How are a user's skills connected to potential career paths?

---

# 🎯 2. Use Case

Students and early-career developers often have difficulty understanding:

- Which job roles match their current skills
- Which skills they are missing for a particular role
- What technologies they should learn next
- How their existing skills relate to different career paths

SkillGraph addresses this problem using a graph database.

For example:

```text
User
 │
 ├── HAS_SKILL ──> JavaScript
 │                    │
 │                    └── REQUIRED_FOR ──> Full Stack Developer
 │
 ├── HAS_SKILL ──> React
 │                    │
 │                    └── REQUIRED_FOR ──> Frontend Developer
 │
 └── WORKED_ON ──> Project
                       │
                       └── USES ──> Node.js
