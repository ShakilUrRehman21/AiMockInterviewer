#  AI Mock Interview Platform

An **AI-powered mock interview platform** that helps users practice job interviews with AI-generated questions and feedback.
Users can simulate real interview scenarios, record answers, and receive **AI-based evaluation to improve their performance**.

Built with modern technologies like **Next.js, Clerk, Drizzle ORM, and Gemini AI** to provide a fast, secure, and interactive interview preparation experience.

---

#  Features

*  **Secure Authentication** using Clerk
*  **AI-Generated Interview Questions** using Gemini AI
*  **Optional Webcam Recording** for realistic interview practice
*  **AI Feedback System** to evaluate user responses
*  **Interview Session History** to track progress
*  **Role-Based Interview Questions** based on job title, description, and experience
*  **Responsive UI** built with modern frontend technologies

---

#  Tech Stack

| Technology       | Description                                 |
| ---------------- | ------------------------------------------- |
| **Next.js**      | Full-stack React framework                  |
| **Clerk**        | Authentication and user management          |
| **Drizzle ORM**  | Type-safe database ORM                      |
| **Gemini AI**    | AI-powered question generation and feedback |
| **Tailwind CSS** | Modern UI styling                           |

---

#  Project Structure

```
AI-Mock-Interview
│
├── app/                # Next.js app router
├── components/         # Reusable UI components
├── db/                 # Drizzle schema & configuration
├── lib/                # Utility functions
├── public/             # Static assets
├── utils/              # Helper functions
├── .env                # Environment variables
└── README.md
```

---

#  Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/ai-mock-interview.git
cd ai-mock-interview
```

---

### 2️⃣ Install Dependencies

```bash
npm install
```

---

### 3️⃣ Setup Environment Variables

Create a `.env.local` file in the root directory and add:

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
CLERK_SECRET_KEY=your_clerk_secret

DATABASE_URL=your_database_url

GEMINI_API_KEY=your_gemini_api_key
```

---

### 4️⃣ Push Database Schema

```bash
npm run db:push
```

---

### 5️⃣ Start Drizzle Studio (Optional)

```bash
npm run db:studio
```

This allows you to visually manage your database.

---

### 6️⃣ Run the Development Server

```bash
npm run dev
```

Open in browser:

```
http://localhost:3000
```

---

#  How It Works

1. User signs in using **Clerk Authentication**.
2. User enters:

   * Job Title
   * Job Description
   * Experience
3. **Gemini AI** generates **5–7 interview questions**.
4. User records answers (optionally with webcam).
5. AI analyzes the response and provides **feedback and improvement suggestions**.
6. The session is saved for **future review**.

---

#  Future Improvements

* Voice-to-text answer analysis
* AI scoring system for interview responses
* Behavioral and technical interview modes
* Resume-based question generation
* Real-time speech analysis

---
