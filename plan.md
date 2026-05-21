# Implementation Plan - Renee Dental Services Limited Website

Build a modern, professional, mobile-first website for a dental clinic in Nairobi, Kenya.

## Scope Summary
- **Type**: Single-page application (SPA) with smooth scrolling and specialized sections.
- **Goal**: Establish trust, showcase services, and provide an easy way for patients to book appointments or contact the clinic via WhatsApp/Phone.
- **Constraints**: Client-side only. No server-side database (persistence for appointments will be via email/WhatsApp or local storage for demonstration).

## Affected Areas
- **Frontend**: All pages and components (React, Tailwind CSS, Lucide Icons, Shadcn UI).
- **Data**: Mock data for services, testimonials, and FAQs.
- **Assets**: Dental-related imagery and brand colors.

## Assumptions & Open Questions
- **Images**: Will use high-quality placeholders or public domain medical images.
- **Admin Dashboard**: Since there is no database, the "Admin Dashboard" will be a client-side view displaying locally stored submissions or a mock list of appointments.
- **Maps**: Will use a standard Google Maps iframe embed for Kangundo Road, Nairobi.

## Implementation Phases

### Phase 1: Foundation & Layout (frontend_engineer)
- Configure theme colors in `src/index.css` (soft blue, teal, light grey).
- Set up global layout components: `Navbar` (sticky), `Footer`, and `FloatingWhatsAppButton`.
- Create a reusable `Section` wrapper for consistent padding and spacing.

### Phase 2: Hero & About Sections (frontend_engineer)
- **Hero**: Welcoming banner with clear headlines and primary CTAs (Book/Call).
- **About**: Content focused on professionalism and compassion.

### Phase 3: Services & Why Choose Us (frontend_engineer)
- **Services**: Grid of cards with icons (Lucide) for the 9 dental services listed.
- **Why Choose Us**: Feature cards highlighting clinic advantages.

### Phase 4: Appointment System & Contact (frontend_engineer)
- **Appointment Form**: Shadcn UI based form with validation (Full Name, Phone, Email, Date, Time, Service, Notes).
- **Integration**: Link "Submit" to a WhatsApp message generator or a mock success state.
- **Contact Section**: Display location details, phone, working hours, and Google Maps embed.

### Phase 5: Testimonials, FAQ & Gallery (frontend_engineer)
- **Testimonials**: Rotating carousel using `src/components/ui/carousel.tsx`.
- **FAQ Section**: Accordion for common dental questions.
- **Gallery**: Grid showing clinic environment and procedures.

### Phase 6: Payment Options & Extra Features (quick_fix_engineer)
- **Payment Section**: Visual display of accepted methods.
- **SEO/Meta**: Update `index.html` with relevant keywords for dental services in Nairobi.
- **Blog Section**: Simple mock blog cards for dental tips.
- **Emergency Section**: Prominent "Emergency Contact" UI.

### Phase 7: Mock Admin Dashboard (frontend_engineer)
- Create a protected-looking route or toggle view to see "Appointments" (populated from `localStorage` or mock data).

## Sequencing Constraints
- Phase 1 must be completed before visual styling of other sections.
- Appointment form needs to be functional before the Admin Dashboard phase.
- All UI components should leverage existing Shadcn primitives in `src/components/ui`.
