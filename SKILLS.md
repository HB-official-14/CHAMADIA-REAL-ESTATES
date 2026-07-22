# [SKILLS.md](http://SKILLS.md)

Version: 1.0

# Purpose

This document defines the engineering standards, development workflow, technical skills, architectural decisions, and coding practices for this project.

Every implementation must follow these guidelines unless explicitly instructed otherwise.

The objective is to create a production-ready real estate website with clean architecture, excellent user experience, outstanding performance, strong security, and long-term maintainability.

---

# Development Philosophy

Always think before writing code.

Understand the problem completely before implementing a solution.

Never rush into coding.

Plan first.

Analyze existing code.

Identify reusable components.

Choose the simplest maintainable solution.

Avoid unnecessary complexity.

Every line of code should have a clear purpose.

---



# Primary Goals

The website should always be:

- Fast
- Secure
- Elegant
- Modern
- Responsive
- Maintainable
- Scalable
- Accessible
- SEO Friendly
- Production Ready

---



# Tech Stack

Always use the latest stable versions unless compatibility requires otherwise.

Preferred technologies:

Framework:

- Next.js

Language:

- TypeScript

UI:

- React

Styling:

- Tailwind CSS

UI Components:

- shadcn/ui

Icons:

- Lucide React

Animations:

- Framer Motion

Database:

- PostgreSQL

ORM:

- Prisma

Authentication:

- Better Auth (or project-approved alternative)

Validation:

- Zod

Forms:

- React Hook Form

Image Optimization:

- Next.js Image

Deployment:

- Vercel (preferred)

Package Manager:

- pnpm

---



# Folder Organization

Use feature-based architecture whenever possible.

Example:

app/

components/

features/

hooks/

services/

lib/

utils/

database/

actions/

types/

config/

constants/

middleware/

public/

Never place unrelated files together.

Every feature should remain isolated.

---



# Naming Conventions

Use consistent naming everywhere.

Components

PascalCase

Example:

PropertyCard.tsx

HeroSection.tsx

Navbar.tsx

Hooks

camelCase

Example:

useAuth.ts

usePropertySearch.ts

Utilities

camelCase

Example:

formatPrice.ts

generateSlug.ts

Services

camelCase

Example:

propertyService.ts

leadService.ts

Database Models

Singular

Example:

Property

Lead

Appointment

Developer

Admin

Enums

UPPER_CASE

Example:

PROPERTY_STATUS

USER_ROLE

APPOINTMENT_STATUS

Constants

UPPER_CASE

Example:

MAX_IMAGES

DEFAULT_PAGE_SIZE

---



# Code Style

Always write:

Readable code

Small functions

Pure functions where possible

Reusable components

Typed interfaces

Modular architecture

Never:

Duplicate code

Hardcode values

Ignore TypeScript errors

Ignore lint warnings

Create giant components

Mix business logic inside UI

---



# Component Design

Every component should have one responsibility.

Good Example

PropertyCard

PropertyGallery

PropertyFeatures

PropertyLocation

Bad Example

PropertyEverythingComponent

Large components should always be split into multiple reusable components.

---



# Reusability

Before creating anything new ask:

Does this already exist?

Can it be reused?

Can it become reusable?

Never duplicate UI.

Never duplicate utilities.

Never duplicate validation.

Never duplicate business logic.

---



# State Management

Keep state as close as possible to where it is used.

Avoid unnecessary global state.

Prefer:

Server Components

Local State

Context only when required

Global state only when absolutely necessary.

---



# API Design

Every API should:

Validate inputs

Return meaningful errors

Return consistent JSON

Handle exceptions

Protect private routes

Log unexpected failures

Never expose internal implementation.

---



# Database Principles

Design database for long-term growth.

Always:

Normalize tables

Use indexes

Use foreign keys

Avoid duplicate records

Optimize queries

Support future scalability

Never write inefficient queries intentionally.

---



# Performance Mindset

Performance is a feature.

Always optimize:

Rendering

Images

Fonts

Bundle size

Database queries

Network requests

Hydration

Loading speed

Avoid unnecessary rerenders.

Avoid unnecessary API calls.

Lazy load heavy content.

---



# Security Mindset

Never trust user input.

Always validate everything.

Always sanitize inputs.

Protect APIs.

Protect secrets.

Prevent common vulnerabilities.

Security should never be optional.

---



# Responsive Design

Every page must work correctly on:

Mobile

Tablet

Laptop

Desktop

Ultra-wide screens

Never design desktop first only.

Always verify responsiveness.

---



# Accessibility

Support:

Semantic HTML

Keyboard navigation

Screen readers

ARIA labels

Alt text

Proper heading hierarchy

Accessibility is part of development, not an afterthought.

---



# Documentation

Complex logic should always include useful documentation.

Explain:

Why

Not just:

What

Future developers should understand decisions quickly.

---



# Final Rule

When multiple implementation options exist:

Choose the solution that is:

Simpler

Cleaner

More maintainable

More scalable

More reusable

More readable

Never sacrifice long-term quality for short-term speed.

---



# UI & UX Standards

The website should create a premium first impression.

Every page should feel:

- Modern
- Luxury
- Professional
- Elegant
- Clean
- Fast
- Trustworthy

Users should instantly understand:

- Where they are
- What they can do
- What action they should take next

Every page must guide the user naturally.

---



# Design Philosophy

Follow these principles:

- Simplicity over complexity
- Consistency over creativity
- Function before decoration
- Premium without clutter

Every design decision should improve usability.

Never add visual elements without purpose.

---



# Visual Hierarchy

Every page should have:

Primary Heading

↓

Supporting Text

↓

Primary Call To Action

↓

Secondary Content

↓

Additional Details

The user's attention should always move naturally from top to bottom.

---



# Layout Standards

Prefer large spacing.

Avoid crowded layouts.

Use consistent padding.

Maintain consistent margins.

Content should breathe.

Recommended layout:

Large Hero

↓

Key Information

↓

Featured Content

↓

Benefits

↓

Projects

↓

Testimonials

↓

Contact

↓

Footer

---



# Responsive Design

Design Mobile First.

Then optimize for:

Tablet

Laptop

Desktop

Large Screens

Never hide important functionality on smaller devices.

---



# Grid System

Maintain consistent grids.

Examples:

2 Columns

3 Columns

4 Columns

Auto Responsive Grid

Avoid uneven spacing.

Maintain alignment.

---



# Typography

Typography should feel premium.

Use a maximum of:

One heading font

One body font

Maintain consistent hierarchy.

Example:

H1

↓

H2

↓

H3

↓

Body

↓

Small Text

↓

Caption

Never randomly change font sizes.

---



# Headings

Every page must have only one H1.

Use H2 for sections.

Use H3 for cards.

Never skip heading hierarchy.

---



# Paragraphs

Keep paragraphs readable.

Avoid large text blocks.

Use short paragraphs.

Improve readability using spacing.

---



# Cards

Cards should be:

Simple

Premium

Rounded

Consistent

Clickable

Hover friendly

Every card should clearly display:

Image

Title

Location

Price

Important Details

Primary Action

Avoid unnecessary information.

---



# Buttons

Buttons should clearly communicate action.

Examples:

View Details

Contact Us

Book Visit

Call Now

Send Message

Explore Projects

Buttons should have:

Hover state

Focus state

Disabled state

Loading state

Never create buttons without feedback.

---



# Forms

Forms should feel effortless.

Always:

Use labels

Validate inputs

Show helpful errors

Show success messages

Show loading indicators

Keep forms short.

Only ask for necessary information.

---



# Input Fields

Each input should include:

Label

Placeholder

Validation

Helpful Error

Focus State

Never rely on placeholders instead of labels.

---



# Navigation

Navigation should always remain simple.

Users should reach any important page within three clicks.

Primary navigation should remain clean.

Avoid overcrowded menus.

---



# Header

Header should always include:

Logo

Navigation

Primary CTA

Mobile Menu

Keep the header lightweight.

---



# Footer

Footer should include:

Company Information

Quick Links

Services

Contact Information

Social Links

Copyright

Privacy Policy

Terms

---



# Hero Section

The hero section should answer:

Who are we?

What do we offer?

Why should users trust us?

What should users do next?

Every hero should include:

Heading

Supporting Text

Primary CTA

Secondary CTA

High-quality Visual

---



# Call To Action

Every major section should encourage user interaction.

Examples:

Book a Visit

Contact an Expert

Explore Projects

Request Information

Get Started

Never leave users without a next step.

---



# Property Listings

Every property card should display only essential information.

Include:

Image

Title

Location

Price

Property Type

Status

Area

Bedrooms (if applicable)

Bathrooms (if applicable)

Primary CTA

Never overload property cards.

---



# Property Details Page

Property detail pages should include:

Gallery

Overview

Features

Amenities

Location

Map

Floor Plans

Payment Plan

FAQs

Related Properties

Contact Form

Inquiry Button

Book Visit Button

---



# Images

Use only high-quality images.

Always optimize images.

Support lazy loading.

Maintain aspect ratios.

Avoid stretched images.

---



# Icons

Icons should improve understanding.

Never use icons as decoration only.

Maintain consistent icon style throughout the website.

---



# Colors

Use a consistent color palette.

Primary Color

Secondary Color

Accent Color

Neutral Colors

Success

Warning

Error

Avoid random colors.

Maintain brand consistency.

---



# Shadows

Use subtle shadows.

Avoid heavy shadows.

Depth should feel natural.

---



# Borders

Use soft borders.

Avoid unnecessary outlines.

Maintain consistency.

---



# Animations

Animations should feel smooth.

Never distract users.

Use animations only when they improve user experience.

Examples:

Fade

Slide

Scale

Reveal

Hover

Loading

Avoid excessive motion.

---



# Loading States

Never leave blank screens.

Always show:

Skeleton loaders

Loading indicators

Progress feedback

Users should know something is happening.

---



# Empty States

Every empty state should explain:

Why nothing is visible

What users can do next

Provide helpful actions.

---



# Error States

Errors should:

Explain what happened

Suggest a solution

Provide retry options

Never display technical errors directly.

---



# Notifications

Notifications should be:

Short

Clear

Actionable

Helpful

Avoid vague messages.

---



# Search Experience

Search should be:

Fast

Responsive

Predictable

Useful

Support filtering and sorting whenever appropriate.

---



# Accessibility Standards

Maintain:

Keyboard support

Focus indicators

ARIA labels

Alt text

Readable typography

Proper contrast

Accessibility is mandatory.

---



# User Journey

Every page should guide users toward meaningful actions.

Common actions include:

View Property

Contact Team

Request Details

Book Visit

Call

Send Message

Never create dead ends.

Always provide a logical next step.

---



# Final UI Rule

Every interface should answer one question:

"Would a premium real estate company proudly launch this today?"

If the answer is no,

improve the design before shipping.

---



# Component Development Standards

Components are the foundation of the application.

Every component must be:

- Reusable
- Maintainable
- Testable
- Responsive
- Accessible
- Well Typed

Never create components that solve only one temporary problem.

Think long-term.

---



# Single Responsibility Principle

Each component should have one responsibility.

Good Examples:

- PropertyCard
- PropertyGallery
- HeroSection
- ContactForm
- SearchBar
- ProjectCard
- TestimonialCard
- FAQSection
- Navbar
- Footer

Bad Examples:

- HomeEverything
- MegaComponent
- PropertyPageUI
- AppComponent

If a component becomes too large, split it.

---



# Component Size

Ideal component size:

50–200 lines.

If a component exceeds approximately 300 lines:

Ask:

Can this be divided into smaller reusable components?

Usually the answer is yes.

---



# Component Structure

Every component should follow a consistent order.

Imports

↓

Types

↓

Constants

↓

Hooks

↓

Business Logic

↓

Handlers

↓

Render

↓

Export

Keep the structure predictable.

---



# Props

Always use typed props.

Never use "any".

Good Example:

interface PropertyCardProps

Avoid:

any

unknown unless necessary

Always make props explicit.

---



# Component Naming

Use PascalCase.

Examples:

PropertyCard

HeroSection

SearchBar

LeadForm

AppointmentForm

Footer

Navbar

ProjectGallery

Never use vague names like:

Card1

Box

Container2

Component

---



# Reusability

Before creating a new component ask:

Can an existing component be reused?

Can this become generic?

Can it accept props instead?

Never duplicate UI.

---



# Layout Components

Create reusable layout components.

Examples:

Container

Section

Grid

Stack

Flex

PageLayout

SidebarLayout

DashboardLayout

These should be reused throughout the project.

---



# Buttons

Create one reusable button component.

Support variants.

Examples:

Primary

Secondary

Outline

Ghost

Danger

Success

Loading

Disabled

Never create dozens of different button implementations.

---



# Forms

Every form should use reusable form components.

Examples:

Input

Textarea

Checkbox

Radio

Switch

Dropdown

Date Picker

File Upload

OTP Input

Phone Input

Validation should remain consistent.

---



# Form Validation

Validation should be centralized.

Never duplicate validation logic.

Use shared schemas.

Error messages should remain consistent.

---



# Inputs

Every input should support:

Label

Placeholder

Helper Text

Validation

Disabled State

Loading State

Error State

Required Indicator

Focus State

Accessibility

---



# Cards

Cards should remain reusable.

Examples:

PropertyCard

ProjectCard

BlogCard

AgentCard

ServiceCard

Each card should receive data through props.

Never hardcode content.

---



# Property Card Standards

Every property card should support:

Image

Title

Price

Location

Status

Area

Bedrooms

Bathrooms

Property Type

Favorite Button

Share Button

Primary CTA

Secondary CTA

Cards should adapt gracefully if some information is unavailable.

---



# Images

Create reusable image components.

Support:

Lazy Loading

Fallback Images

Blur Placeholder

Responsive Images

Proper Aspect Ratio

Image Optimization

---



# Navigation Components

Navigation should remain modular.

Separate:

Navbar

Desktop Menu

Mobile Menu

Dropdown

Mega Menu

Breadcrumb

Search

Profile Menu

Avoid one massive navigation component.

---



# Hero Components

Hero sections should remain reusable.

Support:

Title

Subtitle

Description

Primary CTA

Secondary CTA

Background Image

Overlay

Statistics

Badge

Animation

---



# Sections

Create reusable sections.

Examples:

FAQ Section

Testimonials

Featured Projects

Latest Projects

Contact Section

Services

About

Benefits

Every section should remain configurable.

---



# Tables

Tables should support:

Sorting

Filtering

Pagination

Loading

Empty State

Search

Responsive Layout

Selection

Bulk Actions

Never build separate table systems.

---



# Modals

Create one reusable modal system.

Support:

Confirmation

Alert

Form

Image Preview

Gallery

Video

Custom Content

Every modal should trap keyboard focus.

---



# Loading Components

Create reusable loading components.

Examples:

Spinner

Skeleton Card

Skeleton Table

Skeleton List

Skeleton Details

Never leave blank pages.

---



# Empty States

Reusable empty state component.

Support:

Title

Description

Icon

Action Button

Illustration

Every empty state should guide the user.

---



# Error Components

Reusable error component.

Support:

Title

Message

Retry Button

Support Link

Never expose raw error messages.

---



# Pagination

Create reusable pagination.

Support:

Previous

Next

Page Numbers

Current Page

First

Last

Responsive Layout

---



# Search Components

Search components should support:

Debounce

Clear Button

Loading Indicator

Keyboard Navigation

Suggestions

No Results State

---



# Filter Components

Filters should be reusable.

Support:

Checkbox

Dropdown

Price Range

Property Type

Location

Status

Bedrooms

Bathrooms

Area

Reset Filters

---



# Icons

Use one icon library consistently.

Icons should improve usability.

Avoid decorative icons without purpose.

---



# Animations

Keep animations reusable.

Examples:

Fade In

Slide Up

Scale

Hover

Reveal

Page Transition

Avoid custom animations for every page.

---



# Dashboard Components

Admin dashboard should use reusable widgets.

Examples:

Stats Card

Analytics Card

Recent Leads

Recent Appointments

Recent Properties

Charts

Tables

Quick Actions

---



# Accessibility

Every component must support:

Keyboard Navigation

ARIA Labels

Focus Indicators

Screen Readers

Semantic HTML

Accessibility is never optional.

---



# Component Checklist

Before creating a component ask:

Is it reusable?

Is it typed?

Is it responsive?

Is it accessible?

Can it be configured?

Can another page reuse it?

Is it easy to maintain?

If any answer is "No",

improve the component before implementation.

---



# Final Component Rule

Build components as if they will be reused across the entire application for many years.

Never build temporary UI.