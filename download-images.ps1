# Download Unsplash images to local directory
$baseDir = "C:\Users\Administrator\.openwork\taping-trading"
$imagesDir = Join-Path $baseDir "images\products"

# Create directory if not exists
if (-not (Test-Path $imagesDir)) {
    New-Item -ItemType Directory -Path $imagesDir -Force
    Write-Host "Created directory: $imagesDir"
}

# List of image URLs
$urls = @(
    "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=800&fit=crop",
    "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&h=800&fit=crop",
    "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&h=800&fit=crop",
    "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&h=800&fit=crop",
    "https://images.unsplash.com/photo-1604176354204-9268737828e4?w=800&h=800&fit=crop",
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=800&fit=crop",
    "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&h=800&fit=crop",
    "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&h=800&fit=crop",
    "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&h=800&fit=crop",
    "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&h=800&fit=crop",
    "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=800&h=800&fit=crop",
    "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&h=800&fit=crop",
    "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=800&h=800&fit=crop",
    "https://images.unsplash.com/photo-1583467875263-d50dec37a88c?w=800&h=800&fit=crop",
    "https://images.unsplash.com/photo-1557170334-a9632e77c6e4?w=800&h=800&fit=crop",
    "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=800&h=800&fit=crop",
    "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=800&h=800&fit=crop",
    "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=800&h=800&fit=crop",
    "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&h=800&fit=crop",
    "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=800&h=800&fit=crop"
)

$count = 0
foreach ($url in $urls) {
    # Extract photo ID from URL
    if ($url -match 'photo-([^?]+)') {
        $photoId = $matches[1]
        $filename = "$photoId.jpg"
        $filepath = Join-Path $imagesDir $filename
        
        # Download if not exists
        if (-not (Test-Path $filepath)) {
            Write-Host "Downloading $photoId..." -NoNewline
            try {
                Invoke-WebRequest -Uri $url -OutFile $filepath -ErrorAction Stop
                Write-Host " ✓" -ForegroundColor Green
                $count++
            } catch {
                Write-Host " ✗ Failed: $_" -ForegroundColor Red
            }
        } else {
            Write-Host "○ Skipping existing $photoId" -ForegroundColor Yellow
        }
    }
}

Write-Host ""
Write-Host "Downloaded $count new images" -ForegroundColor Cyan
