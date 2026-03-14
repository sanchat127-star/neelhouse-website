# Images Folder

## Instructions:
Add your `logo.jpg` file to this folder.

## Required Image:
- **logo.jpg** - Organization logo (used in header and footer)

## After adding logo.jpg:

Update these files to use the logo:

### 1. `/src/app/components/Navigation.tsx`
Add this import at the top:
```tsx
import logo from "../../assets/images/logo.jpg";
```

Replace the Link component (around line 30) with:
```tsx
<Link to="/" className="flex items-center space-x-3">
  <img src={logo} alt="Neelmonilata (NEEL) House" className="h-16 w-16 object-contain" />
  <span className="text-2xl text-gray-900">Neelmonilata (NEEL) House</span>
</Link>
```

### 2. `/src/app/components/Footer.tsx`
Add this import at the top:
```tsx
import logo from "../../assets/images/logo.jpg";
```

Update the footer logo section (around line 11) to include:
```tsx
<img src={logo} alt="Neelmonilata (NEEL) House" className="h-20 w-auto object-contain" />
<span className="text-2xl text-white">Neelmonilata (NEEL) House</span>
```

Then push to GitHub and deploy!
