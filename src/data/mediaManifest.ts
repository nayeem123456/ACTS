/**
 * Media Manifest — Maps approved ACTS media assets to service categories and pages.
 * 
 * REVIEW NOTES:
 * - All images show outdoor/landscaping/pool/renovation work in UAE villa settings.
 * - Images contain ACTS staff performing work (grass installation worker visible).
 * - No identifiable private residential addresses or vehicle plates found.
 * - One image (outdoor-kitchen-setup.jpg) shows a residential kitchen area — flagged for review.
 * - All images appear to be genuine ACTS project work based on visual context.
 * - Videos not yet classified — pending thumbnail extraction.
 * 
 * APPROVAL STATUS: Pending client confirmation before public deployment.
 */

export interface MediaAsset {
  id: string
  originalFilename: string
  optimizedPath: string
  category: string
  page: string[]
  alt: string
  altAr: string
  orientation: 'landscape' | 'portrait' | 'square'
  approvalStatus: 'approved' | 'pending-review' | 'flagged'
  reviewNote?: string
  verified: boolean
}

export const mediaManifest: MediaAsset[] = [
  {
    id: 'landscaping-01',
    originalFilename: '04bd04c6-6d5d-4f5a-bc24-91a2ff524d56.jpg',
    optimizedPath: '/media/images/landscaping-outdoor/landscaping-artificial-grass-progress.jpg',
    category: 'landscaping',
    page: ['landscaping', 'projects'],
    alt: 'Artificial grass installation in progress at a UAE villa outdoor area',
    altAr: 'تركيب العشب الصناعي في منطقة خارجية لفيلا في الإمارات',
    orientation: 'landscape',
    approvalStatus: 'pending-review',
    verified: false,
  },
  {
    id: 'landscaping-02',
    originalFilename: '090b0b7c-6470-4e44-b43e-ec5672a1653e.jpg',
    optimizedPath: '/media/images/landscaping-outdoor/landscaping-garden-steppers.jpg',
    category: 'landscaping',
    page: ['landscaping', 'home', 'projects'],
    alt: 'Completed villa garden with stepping stones, artificial grass, and outdoor kitchen',
    altAr: 'حديقة فيلا مكتملة مع حجارة الممشى والعشب الصناعي ومطبخ خارجي',
    orientation: 'portrait',
    approvalStatus: 'pending-review',
    verified: false,
  },
  {
    id: 'landscaping-03',
    originalFilename: '30d744c6-4800-4575-9508-ec3096f5a383.jpg',
    optimizedPath: '/media/images/landscaping-outdoor/landscaping-villa-garden-path.jpg',
    category: 'landscaping',
    page: ['landscaping', 'projects'],
    alt: 'Villa side garden path with artificial grass, stepping stones, and landscape lighting',
    altAr: 'ممشى حديقة جانبية للفيلا مع عشب صناعي وإضاءة حدائق',
    orientation: 'portrait',
    approvalStatus: 'pending-review',
    verified: false,
  },
  {
    id: 'landscaping-04',
    originalFilename: '41895ce6-ae77-44ee-b64d-a0073299ec1d.jpg',
    optimizedPath: '/media/images/landscaping-outdoor/landscaping-night-garden.jpg',
    category: 'landscaping',
    page: ['landscaping', 'projects'],
    alt: 'Night view of completed villa garden with stepping stones, plants, and landscape lighting',
    altAr: 'منظر ليلي لحديقة الفيلا المكتملة مع الإضاءة الهندسية',
    orientation: 'portrait',
    approvalStatus: 'pending-review',
    verified: false,
  },
  {
    id: 'civil-01',
    originalFilename: '6630a055-a2eb-44a1-8c83-2f98b5df87bd.jpg',
    optimizedPath: '/media/images/civil-works/parking-shed-construction.jpg',
    category: 'civil-works',
    page: ['civil-works', 'parking-sheds', 'projects'],
    alt: 'Steel parking shed frame under construction at a UAE villa',
    altAr: 'هيكل مظلة سيارة معدنية قيد الإنشاء في فيلا إماراتية',
    orientation: 'portrait',
    approvalStatus: 'pending-review',
    verified: false,
  },
  {
    id: 'landscaping-05',
    originalFilename: 'aca1ce71-242d-45af-9337-2c318916cb10.jpg',
    optimizedPath: '/media/images/landscaping-outdoor/landscaping-artificial-turf.jpg',
    category: 'landscaping',
    page: ['landscaping', 'projects'],
    alt: 'Freshly laid artificial turf with decorative block paving at a UAE property',
    altAr: 'عشب صناعي مفروش حديثاً مع بلاط زخرفي في عقار إماراتي',
    orientation: 'landscape',
    approvalStatus: 'pending-review',
    verified: false,
  },
  {
    id: 'civil-02',
    originalFilename: 'ba1960a4-58df-4fda-99c8-720cb9b8820e.jpg',
    optimizedPath: '/media/images/civil-works/outdoor-structure-installation.jpg',
    category: 'civil-works',
    page: ['civil-works', 'parking-sheds', 'projects'],
    alt: 'Outdoor pergola structure installation at a UAE villa',
    altAr: 'تركيب هيكل برجولة خارجية في فيلا إماراتية',
    orientation: 'portrait',
    approvalStatus: 'pending-review',
    verified: false,
  },
  {
    id: 'renovation-01',
    originalFilename: 'bc92f0aa-f702-4b91-ade4-f2b1a1109ab9.jpg',
    optimizedPath: '/media/images/renovation-refurbishment/stone-cladding-water-feature.jpg',
    category: 'renovation',
    page: ['renovation-refurbishment', 'projects'],
    alt: 'Stone cladding water feature with ambient lighting, villa renovation work',
    altAr: 'منظومة كسوة حجرية مع نافورة وإضاءة محيطية، أعمال تجديد فيلا',
    orientation: 'portrait',
    approvalStatus: 'pending-review',
    verified: false,
  },
  {
    id: 'renovation-02',
    originalFilename: 'WhatsApp Image 2026-09-29 at 6.20.12 PM (1).jpeg',
    optimizedPath: '/media/images/renovation-refurbishment/villa-entrance-carpentry-door.jpg',
    category: 'carpentry',
    page: ['carpentry', 'renovation-refurbishment', 'projects'],
    alt: 'Premium arched wooden entrance door with decorative glass panels and wall lights',
    altAr: 'باب مدخل خشبي قوسي فاخر مع ألواح زجاجية مزخرفة وإضاءة جدارية',
    orientation: 'portrait',
    approvalStatus: 'pending-review',
    verified: false,
  },
  {
    id: 'renovation-03',
    originalFilename: 'WhatsApp Image 2026-09-29 at 6.20.12 PM.jpeg',
    optimizedPath: '/media/images/renovation-refurbishment/villa-exterior-marble-tiling.jpg',
    category: 'renovation',
    page: ['renovation-refurbishment', 'home', 'projects'],
    alt: 'Villa exterior renovation with marble tiling, stone cladding, and manicured garden in Dubai',
    altAr: 'تجديد واجهة فيلا بالرخام وكسوة حجرية وحديقة منسقة في دبي',
    orientation: 'portrait',
    approvalStatus: 'pending-review',
    verified: false,
  },
  {
    id: 'landscaping-06',
    originalFilename: 'WhatsApp Image 2026-09-29 at 6.20.13 PM (1).jpeg',
    optimizedPath: '/media/images/landscaping-outdoor/landscaping-villa-lawn.jpg',
    category: 'landscaping',
    page: ['landscaping', 'projects'],
    alt: 'Wide artificial grass lawn installation at a UAE villa with landscaping in progress',
    altAr: 'تركيب حديقة عشب صناعية واسعة في فيلا إماراتية',
    orientation: 'portrait',
    approvalStatus: 'pending-review',
    verified: false,
  },
  {
    id: 'landscaping-07',
    originalFilename: 'WhatsApp Image 2026-09-29 at 6.20.13 PM (2).jpeg',
    optimizedPath: '/media/images/landscaping-outdoor/landscaping-paving-plants.jpg',
    category: 'landscaping',
    page: ['landscaping', 'projects'],
    alt: 'Landscaping work in progress with paving, grass, and flower beds at a villa',
    altAr: 'أعمال تنسيق الحدائق قيد التنفيذ مع الرصف والعشب وأحواض الزهور',
    orientation: 'portrait',
    approvalStatus: 'pending-review',
    verified: false,
  },
  {
    id: 'landscaping-08',
    originalFilename: 'WhatsApp Image 2026-09-29 at 6.20.13 PM.jpeg',
    optimizedPath: '/media/images/landscaping-outdoor/landscaping-garden-steppers-2.jpg',
    category: 'landscaping',
    page: ['landscaping', 'projects'],
    alt: 'Garden stepping stone path with artificial grass and manicured plants at a UAE villa',
    altAr: 'ممشى حجارة مع عشب صناعي ونباتات منسقة في فيلا إماراتية',
    orientation: 'portrait',
    approvalStatus: 'pending-review',
    verified: false,
  },
  {
    id: 'pool-01',
    originalFilename: 'WhatsApp Image 2026-09-29 at 6.20.14 PM (1).jpeg',
    optimizedPath: '/media/images/swimming-pools/pool-construction-mosaic-tiles.jpg',
    category: 'swimming-pool',
    page: ['swimming-pool-construction', 'projects'],
    alt: 'Swimming pool under construction with blue mosaic tile finish and entry steps',
    altAr: 'حمام سباحة قيد الإنشاء مع تشطيب بالموزاييك الأزرق وسلالم الدخول',
    orientation: 'portrait',
    approvalStatus: 'pending-review',
    verified: false,
  },
  {
    id: 'pool-02',
    originalFilename: 'WhatsApp Image 2026-09-29 at 6.20.14 PM.jpeg',
    optimizedPath: '/media/images/swimming-pools/pool-completed-with-garden.jpg',
    category: 'swimming-pool',
    page: ['swimming-pool-construction', 'home', 'projects'],
    alt: 'Completed swimming pool with mosaic tiles, artificial grass, and landscaped garden',
    altAr: 'حمام سباحة مكتمل مع موزاييك وعشب صناعي وحديقة منسقة',
    orientation: 'landscape',
    approvalStatus: 'pending-review',
    verified: false,
  },
  {
    id: 'renovation-04',
    originalFilename: 'WhatsApp Image 2026-09-29 at 6.20.15 PM.jpeg',
    optimizedPath: '/media/images/renovation-refurbishment/villa-exterior-pool-garden.jpg',
    category: 'renovation',
    page: ['renovation-refurbishment', 'villa-renovation-refurbishment', 'home', 'projects'],
    alt: 'Completed villa exterior showing pool, artificial lawn, and landscaped garden at dusk',
    altAr: 'واجهة فيلا مكتملة مع حمام السباحة والحديقة المنسقة عند الغسق',
    orientation: 'landscape',
    approvalStatus: 'pending-review',
    verified: false,
  },
  {
    id: 'renovation-05',
    originalFilename: 'WhatsApp Image 2026-09-30 at 9.39.02 AM.jpeg',
    optimizedPath: '/media/images/renovation-refurbishment/outdoor-kitchen-setup.jpg',
    category: 'renovation',
    page: ['renovation-refurbishment', 'projects'],
    alt: 'Outdoor kitchen area with custom cabinetry, barbecue grill, and decorative wall tiles',
    altAr: 'منطقة مطبخ خارجي مع خزائن مخصصة وشواية وبلاط جداري زخرفي',
    orientation: 'portrait',
    approvalStatus: 'pending-review',
    reviewNote: 'Shows residential kitchen interior detail — confirm approval for public use',
    verified: false,
  },
  {
    id: 'landscaping-09',
    originalFilename: '94ef6e73-b065-4df1-acc5-40fd37670348.jpg',
    optimizedPath: '/media/images/landscaping-outdoor/landscaping-grass-installation.jpg',
    category: 'landscaping',
    page: ['landscaping', 'projects'],
    alt: 'Landscaping team member installing artificial grass rolls at a UAE villa',
    altAr: 'عامل تنسيق حدائق يقوم بتركيب لفائف العشب الصناعي في فيلا إماراتية',
    orientation: 'landscape',
    approvalStatus: 'pending-review',
    reviewNote: 'Shows identifiable ACTS worker — confirm approval for public use',
    verified: false,
  },
]

/** Get assets for a specific page/service */
export function getMediaForPage(page: string): MediaAsset[] {
  return mediaManifest.filter((asset) => asset.page.includes(page))
}

/** Get hero/featured assets for the homepage */
export function getHomepageMedia(): MediaAsset[] {
  return mediaManifest.filter(
    (asset) =>
      asset.page.includes('home') && asset.approvalStatus !== 'flagged'
  )
}

export default mediaManifest
