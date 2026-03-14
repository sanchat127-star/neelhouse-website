export function Deployment() {
  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-amber-50 border-2 border-amber-500 rounded-lg p-6 mb-8">
          <h1 className="text-3xl font-bold text-amber-900 mb-2">
            🚀 Deployment Instructions
          </h1>
          <p className="text-amber-800">
            This page is temporary and can be deleted after you copy the instructions.
            Access this page at: <strong>neelhouse.org/deployment</strong>
          </p>
        </div>

        <div className="prose prose-lg max-w-none bg-gray-50 p-8 rounded-lg shadow-lg font-mono text-sm">
          <pre className="whitespace-pre-wrap break-words bg-white p-6 rounded border border-gray-300 overflow-x-auto" style={{ fontFamily: 'monospace' }}>
{`================================================================================
NEELMONILATA (NEEL) HOUSE WEBSITE DEPLOYMENT GUIDE
================================================================================

Domain: neelhouse.org (GoDaddy)
Website: React Application with Multi-page Navigation
Last Updated: March 8, 2026

================================================================================
RECOMMENDED: VERCEL HOSTING (100% FREE)
================================================================================

WHY VERCEL IS BEST:
  ✓ 100% FREE for non-profit projects
  ✓ Automatic HTTPS/SSL certificates
  ✓ Lightning-fast global CDN
  ✓ Automatic deployments from GitHub
  ✓ No manual uploads needed - ever!

TOTAL COST:
  - Domain (GoDaddy): ~$15/year (already purchased)
  - Hosting (Vercel): $0/month forever

================================================================================
STEP-BY-STEP DEPLOYMENT
================================================================================

STEP 1: CREATE A GITHUB ACCOUNT
--------------------------------------------------------------------------------
1. Go to github.com
2. Click "Sign up"
3. Create a free account
4. Verify your email address

STEP 2: CREATE A GITHUB REPOSITORY
--------------------------------------------------------------------------------
1. Log into GitHub
2. Click the "+" icon in the top right
3. Select "New repository"
4. Name it: neelhouse-website
5. Keep it PUBLIC (required for free hosting)
6. Click "Create repository"

STEP 3: UPLOAD YOUR CODE TO GITHUB
--------------------------------------------------------------------------------
OPTION A: Using GitHub Website (Easier for Non-Technical Users)

1. On your repository page, click "uploading an existing file"
2. Drag and drop ALL your project files and folders
3. IMPORTANT: Upload everything EXCEPT:
   - node_modules/ folder (too large)
   - dist/ folder (auto-generated)
4. Add a commit message: "Initial website upload"
5. Click "Commit changes"

OPTION B: Using Git Command Line (For Technical Users)

    cd path/to/your/project
    git init
    git add .
    git commit -m "Initial commit"
    git remote add origin https://github.com/YOUR_USERNAME/neelhouse-website.git
    git branch -M main
    git push -u origin main

STEP 4: CREATE A VERCEL ACCOUNT
--------------------------------------------------------------------------------
1. Go to vercel.com
2. Click "Sign Up"
3. Choose "Continue with GitHub"
4. Authorize Vercel to access your GitHub account
5. Complete the signup process (it's free!)

STEP 5: DEPLOY YOUR WEBSITE TO VERCEL
--------------------------------------------------------------------------------
1. On the Vercel dashboard, click "Add New..." → "Project"
2. You'll see your GitHub repositories
3. Find "neelhouse-website" and click "Import"
4. Vercel will auto-detect it's a Vite React project
5. Framework Preset: Should auto-select "Vite"
6. Build Command: npm run build (auto-filled)
7. Output Directory: dist (auto-filled)
8. Click "Deploy"
9. Wait 1-2 minutes while Vercel builds and deploys
10. You'll see "Congratulations!" with a live URL like:
    neelhouse-website.vercel.app

STEP 6: CONNECT YOUR GODADDY DOMAIN
--------------------------------------------------------------------------------

PART A: ADD DOMAIN IN VERCEL

1. In your Vercel project dashboard, click "Settings"
2. Click "Domains" in the left sidebar
3. In the "Add Domain" field, type: neelhouse.org
4. Click "Add"
5. Vercel will show you DNS records to add:
   - A Record: 76.76.21.21
   - CNAME Record: cname.vercel-dns.com

PART B: UPDATE DNS IN GODADDY

1. Log into your GoDaddy account
2. Go to "My Products"
3. Find your domain "neelhouse.org"
4. Click the three dots (...) → "Manage DNS"

ADD A RECORD:
1. Find the existing A Record (if any) or click "Add"
2. Type: A
3. Name: @
4. Value: 76.76.21.21
5. TTL: 600 (or default)
6. Click "Save"

ADD CNAME RECORD FOR WWW:
1. Click "Add"
2. Type: CNAME
3. Name: www
4. Value: cname.vercel-dns.com
5. TTL: 600 (or default)
6. Click "Save"

REMOVE CONFLICTING RECORDS (IMPORTANT!):
- If there's an existing A Record with a different IP, delete it
- If there's a "parked" or "forwarding" record, delete it
- Keep only the Vercel DNS records

PART C: VERIFY CONNECTION

1. Back in Vercel, click "Refresh" next to your domain
2. Wait 1-5 minutes for verification
3. Once verified, you'll see a green checkmark
4. DNS propagation can take up to 48 hours, but usually works in 1-2 hours

STEP 7: CONFIGURE WWW REDIRECT (OPTIONAL)
--------------------------------------------------------------------------------
1. In Vercel "Domains" settings
2. Add "www.neelhouse.org" as another domain
3. Click "Add"
4. Vercel will automatically redirect www to non-www (or vice versa)

================================================================================
TESTING YOUR LIVE WEBSITE
================================================================================

After DNS propagation (1-48 hours):

1. Open a browser
2. Go to https://neelhouse.org
3. Your website should load!
4. Test all pages:
   - Home
   - About
   - Inspiration
   - Programs
   - Get Involved
   - Quiz

================================================================================
MAKING UPDATES IN THE FUTURE
================================================================================

This is where Vercel shines! 

1. Make changes to your code locally
2. Push to GitHub:

    git add .
    git commit -m "Description of changes"
    git push

3. Vercel AUTOMATICALLY detects the change
4. Vercel AUTOMATICALLY rebuilds and deploys
5. Your live site updates in 1-2 minutes!

NO MANUAL UPLOADS. NO FTP. NO HASSLE.

================================================================================
ALTERNATIVE: NETLIFY HOSTING (ALSO FREE)
================================================================================

Netlify is very similar to Vercel and equally excellent.

STEPS FOR NETLIFY:
1. Create GitHub account & repository (same as above)
2. Go to netlify.com and sign up with GitHub
3. Click "Add new site" → "Import an existing project"
4. Choose GitHub and select your repository
5. Build settings:
   - Build command: npm run build
   - Publish directory: dist
6. Click "Deploy site"
7. In Netlify dashboard → "Domain settings"
8. Add custom domain: neelhouse.org
9. Update GoDaddy DNS with records provided by Netlify

================================================================================
COMPARISON OF OPTIONS
================================================================================

Feature             | GoDaddy Hosting | Vercel      | Netlify
--------------------|-----------------|-------------|-------------
Cost                | $5-15/month     | FREE        | FREE
Speed               | Slower          | Very Fast   | Very Fast
HTTPS               | Manual setup    | Automatic   | Automatic
Deployments         | Manual upload   | Automatic   | Automatic
CDN                 | Limited         | Global      | Global
Difficulty          | Medium          | Easy        | Easy

RECOMMENDED: Use Vercel or Netlify to save money and get better performance!

================================================================================
TROUBLESHOOTING COMMON ISSUES
================================================================================

ISSUE: Domain not connecting
SOLUTION:
  - Wait 24-48 hours for DNS propagation
  - Check DNS settings in GoDaddy match Vercel/Netlify exactly
  - Clear your browser cache (Ctrl+Shift+R or Cmd+Shift+R)

ISSUE: Website shows 404 on page refresh
SOLUTION:
  - This is handled automatically by Vercel/Netlify
  - No action needed

ISSUE: Images not loading
SOLUTION:
  - Check that all images are in the repository
  - Verify image paths are correct
  - Rebuild and redeploy

ISSUE: Changes not showing
SOLUTION:
  - Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
  - Check Vercel/Netlify deployment logs
  - Verify changes were pushed to GitHub

================================================================================
DNS RECORD QUICK REFERENCE
================================================================================

FOR VERCEL:

Type: A
Name: @
Value: 76.76.21.21
TTL: 600

Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 600

================================================================================
CONTACT INFORMATION
================================================================================

Organization: Neelmonilata (NEEL) House
Domain: neelhouse.org
Email: info@neelhouse.org
Domain Registrar: GoDaddy

================================================================================
NEED HELP?
================================================================================

Documentation:
1. Vercel Documentation: vercel.com/docs
2. Netlify Documentation: docs.netlify.com
3. GoDaddy Support: Available via your account
4. GitHub Guides: guides.github.com

================================================================================
DOCUMENT INFORMATION
================================================================================

Document Version: 1.0
Created: March 8, 2026
For: Neelmonilata (NEEL) House Website Deployment

================================================================================
END OF DOCUMENT
================================================================================`}
          </pre>
        </div>

        <div className="mt-8 bg-blue-50 border-2 border-blue-500 rounded-lg p-6">
          <h2 className="text-xl font-bold text-blue-900 mb-3">
            📋 How to Copy These Instructions
          </h2>
          <ol className="text-blue-800 space-y-2">
            <li><strong>1.</strong> Click inside the gray box above</li>
            <li><strong>2.</strong> Press <kbd className="bg-blue-200 px-2 py-1 rounded">Ctrl+A</kbd> (Windows) or <kbd className="bg-blue-200 px-2 py-1 rounded">Cmd+A</kbd> (Mac) to select all</li>
            <li><strong>3.</strong> Press <kbd className="bg-blue-200 px-2 py-1 rounded">Ctrl+C</kbd> (Windows) or <kbd className="bg-blue-200 px-2 py-1 rounded">Cmd+C</kbd> (Mac) to copy</li>
            <li><strong>4.</strong> Open Notepad or TextEdit and paste</li>
            <li><strong>5.</strong> Save as <code className="bg-blue-200 px-2 py-1 rounded">DEPLOYMENT_INSTRUCTIONS.txt</code></li>
          </ol>
        </div>

        <div className="mt-8 bg-red-50 border-2 border-red-500 rounded-lg p-6">
          <h2 className="text-xl font-bold text-red-900 mb-3">
            🗑️ Delete This Page After Deployment
          </h2>
          <p className="text-red-800">
            Once you've copied the instructions and deployed your website, remember to delete this deployment page. It's only meant for temporary access to the deployment guide.
          </p>
        </div>
      </div>
    </div>
  );
}
