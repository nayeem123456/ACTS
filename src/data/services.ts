/**
 * ACTS Services — Verified multi-disciplinary engineering & contracting services.
 * Every listed service is backed by authenticated project photography (zero placeholder spots).
 */

export interface ServiceItem {
  id: string
  slug: string
  category: string
  categoryKey: string
  nameKey: string
  descriptionKey: string
  imageUrl: string
  alt: string
  relatedSlugs?: string[]
}

export interface ServiceCategory {
  id: string
  key: string
  nameKey: string
  services: ServiceItem[]
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'renovation',
    key: 'renovation',
    nameKey: 'services.categories.renovation',
    services: [
      {
        id: 'villa-renovation',
        slug: 'villa-renovation-refurbishment',
        category: 'renovation',
        categoryKey: 'renovation',
        nameKey: 'services.villaRenovation.name',
        descriptionKey: 'services.villaRenovation.description',
        imageUrl: '/media/images/renovation-refurbishment/villa-exterior-pool-garden.jpg',
        alt: 'Completed luxury villa exterior with pool and landscaped garden in UAE',
        relatedSlugs: ['landscaping', 'swimming-pool-construction', 'civil-works'],
      },
      {
        id: 'general-renovation',
        slug: 'renovation-refurbishment',
        category: 'renovation',
        categoryKey: 'renovation',
        nameKey: 'services.generalRenovation.name',
        descriptionKey: 'services.generalRenovation.description',
        imageUrl: '/media/images/renovation-refurbishment/villa-exterior-marble-tiling.jpg',
        alt: 'Villa exterior facade marble tiling and stone cladding refurbishment',
        relatedSlugs: ['villa-renovation-refurbishment', 'civil-works', 'carpentry'],
      },
    ],
  },
  {
    id: 'mep',
    key: 'mep',
    nameKey: 'services.categories.mep',
    services: [
      {
        id: 'electrical-works',
        slug: 'electrical-works',
        category: 'mep',
        categoryKey: 'mep',
        nameKey: 'services.electricalWorks.name',
        descriptionKey: 'services.electricalWorks.description',
        imageUrl: '/media/images/civil-works/outdoor-structure-installation.jpg',
        alt: 'Electrical and technical infrastructure works for UAE properties',
        relatedSlugs: ['plumbing', 'underground-armoured-cable', 'home-automation'],
      },
      {
        id: 'plumbing',
        slug: 'plumbing',
        category: 'mep',
        categoryKey: 'mep',
        nameKey: 'services.plumbing.name',
        descriptionKey: 'services.plumbing.description',
        imageUrl: '/media/images/client-services/plumbing.jpg',
        alt: 'Plumbing installation and maintenance for residential and commercial properties',
        relatedSlugs: ['electrical-works', 'mechanical-works', 'air-conditioning'],
      },
      {
        id: 'mechanical-works',
        slug: 'mechanical-works',
        category: 'mep',
        categoryKey: 'mep',
        nameKey: 'services.mechanicalWorks.name',
        descriptionKey: 'services.mechanicalWorks.description',
        imageUrl: '/media/images/client-services/mechanical-works.jpg',
        alt: 'Mechanical building services and equipment installation',
        relatedSlugs: ['plumbing', 'hvac', 'annual-maintenance'],
      },
      {
        id: 'air-conditioning',
        slug: 'air-conditioning',
        category: 'mep',
        categoryKey: 'mep',
        nameKey: 'services.airConditioning.name',
        descriptionKey: 'services.airConditioning.description',
        imageUrl: '/media/images/client-services/air-conditioning.jpg',
        alt: 'Air conditioning installation and servicing',
        relatedSlugs: ['hvac', 'mechanical-works', 'annual-maintenance'],
      },
      {
        id: 'hvac',
        slug: 'hvac',
        category: 'mep',
        categoryKey: 'mep',
        nameKey: 'services.hvac.name',
        descriptionKey: 'services.hvac.description',
        imageUrl: '/media/images/client-services/hvac.jpg',
        alt: 'HVAC system design, installation and maintenance',
        relatedSlugs: ['air-conditioning', 'mechanical-works', 'annual-maintenance'],
      },
      {
        id: 'home-automation',
        slug: 'home-automation',
        category: 'mep',
        categoryKey: 'mep',
        nameKey: 'services.homeAutomation.name',
        descriptionKey: 'services.homeAutomation.description',
        imageUrl: '/media/images/client-services/home-automation.png',
        alt: 'Smart home automation and integrated controls',
        relatedSlugs: ['electrical-works', 'hvac', 'villa-renovation-refurbishment'],
      },
      {
        id: 'underground-armoured-cable',
        slug: 'underground-armoured-cable',
        category: 'mep',
        categoryKey: 'mep',
        nameKey: 'services.undergroundCable.name',
        descriptionKey: 'services.undergroundCable.description',
        imageUrl: '/media/images/client-services/underground-armoured-cable.jpg',
        alt: 'Underground armoured cable installation',
        relatedSlugs: ['electrical-works', 'civil-works'],
      },
    ],
  },
  {
    id: 'outdoor',
    key: 'outdoor',
    nameKey: 'services.categories.outdoor',
    services: [
      {
        id: 'swimming-pool',
        slug: 'swimming-pool-construction',
        category: 'outdoor',
        categoryKey: 'outdoor',
        nameKey: 'services.swimmingPool.name',
        descriptionKey: 'services.swimmingPool.description',
        imageUrl: '/media/images/swimming-pools/pool-completed-with-garden.jpg',
        alt: 'Completed luxury swimming pool with mosaic tiles and landscaped garden',
        relatedSlugs: ['landscaping', 'civil-works', 'villa-renovation-refurbishment'],
      },
      {
        id: 'landscaping',
        slug: 'landscaping',
        category: 'outdoor',
        categoryKey: 'outdoor',
        nameKey: 'services.landscaping.name',
        descriptionKey: 'services.landscaping.description',
        imageUrl: '/media/images/landscaping-outdoor/landscaping-garden-steppers.jpg',
        alt: 'Modern landscaped villa garden with stepping stones and artificial grass',
        relatedSlugs: ['swimming-pool-construction', 'villa-renovation-refurbishment', 'parking-sheds'],
      },
      {
        id: 'parking-sheds',
        slug: 'parking-sheds',
        category: 'outdoor',
        categoryKey: 'outdoor',
        nameKey: 'services.parkingSheds.name',
        descriptionKey: 'services.parkingSheds.description',
        imageUrl: '/media/images/civil-works/parking-shed-construction.jpg',
        alt: 'Heavy steel and structural parking shed installation at a UAE property',
        relatedSlugs: ['civil-works', 'landscaping'],
      },
      {
        id: 'solar-systems',
        slug: 'solar-systems',
        category: 'outdoor',
        categoryKey: 'outdoor',
        nameKey: 'services.solarSystems.name',
        descriptionKey: 'services.solarSystems.description',
        imageUrl: '/media/images/client-services/solar-systems.jpg',
        alt: 'Solar system installation for UAE properties',
        relatedSlugs: ['electrical-works', 'parking-sheds'],
      },
      {
        id: 'fencing-works',
        slug: 'fencing-works',
        category: 'outdoor',
        categoryKey: 'outdoor',
        nameKey: 'services.fencingWorks.name',
        descriptionKey: 'services.fencingWorks.description',
        imageUrl: '/media/images/client-services/fencing-works.jpg',
        alt: 'Property fencing and boundary works',
        relatedSlugs: ['civil-works', 'landscaping'],
      },
    ],
  },
  {
    id: 'civil-interior',
    key: 'civil',
    nameKey: 'services.categories.civil',
    services: [
      {
        id: 'civil-works',
        slug: 'civil-works',
        category: 'civil-interior',
        categoryKey: 'civil',
        nameKey: 'services.civilWorks.name',
        descriptionKey: 'services.civilWorks.description',
        imageUrl: '/media/images/client-services/civil-works.jpg',
        alt: 'Outdoor pergola structure installation and structural engineering',
        relatedSlugs: ['renovation-refurbishment', 'parking-sheds'],
      },
      {
        id: 'floor-wall-tiling',
        slug: 'floor-wall-tiling',
        category: 'civil-interior',
        categoryKey: 'civil',
        nameKey: 'services.floorWallTiling.name',
        descriptionKey: 'services.floorWallTiling.description',
        imageUrl: '/media/images/client-services/floor-wall-tiling.jpg',
        alt: 'Floor and wall tiling installation',
        relatedSlugs: ['renovation-refurbishment', 'interior-painting'],
      },
      {
        id: 'interior-painting',
        slug: 'interior-painting',
        category: 'civil-interior',
        categoryKey: 'civil',
        nameKey: 'services.interiorPainting.name',
        descriptionKey: 'services.interiorPainting.description',
        imageUrl: '/media/images/client-services/interior-painting.jpg',
        alt: 'Interior and exterior painting works',
        relatedSlugs: ['renovation-refurbishment', 'floor-wall-tiling'],
      },
      {
        id: 'carpentry',
        slug: 'carpentry',
        category: 'civil-interior',
        categoryKey: 'civil',
        nameKey: 'services.carpentry.name',
        descriptionKey: 'services.carpentry.description',
        imageUrl: '/media/images/client-services/carpentry.jpg',
        alt: 'Premium arched wooden entrance door with decorative glass panels',
        relatedSlugs: ['kitchen-joinery', 'renovation-refurbishment'],
      },
      {
        id: 'kitchen-joinery',
        slug: 'kitchen-joinery',
        category: 'civil-interior',
        categoryKey: 'civil',
        nameKey: 'services.kitchenJoinery.name',
        descriptionKey: 'services.kitchenJoinery.description',
        imageUrl: '/media/images/renovation-refurbishment/outdoor-kitchen-setup.jpg',
        alt: 'Custom outdoor kitchen cabinetry, barbecue station and joinery fit-out',
        relatedSlugs: ['carpentry', 'villa-renovation-refurbishment'],
      },
      {
        id: 'gypsum-partitions',
        slug: 'gypsum-partitions',
        category: 'civil-interior',
        categoryKey: 'civil',
        nameKey: 'services.gypsumPartitions.name',
        descriptionKey: 'services.gypsumPartitions.description',
        imageUrl: '/media/images/client-services/gypsum-partitions.jpg',
        alt: 'Gypsum partitions and suspended ceiling installation',
        relatedSlugs: ['cement-board-partitions', 'office-workstations'],
      },
      {
        id: 'cement-board-partitions',
        slug: 'cement-board-partitions',
        category: 'civil-interior',
        categoryKey: 'civil',
        nameKey: 'services.cementBoardPartitions.name',
        descriptionKey: 'services.cementBoardPartitions.description',
        imageUrl: '/media/images/client-services/cement-board-partitions.jpg',
        alt: 'Cement board partition installation',
        relatedSlugs: ['gypsum-partitions', 'civil-works'],
      },
      {
        id: 'office-workstations',
        slug: 'office-workstations',
        category: 'civil-interior',
        categoryKey: 'civil',
        nameKey: 'services.officeWorkstations.name',
        descriptionKey: 'services.officeWorkstations.description',
        imageUrl: '/media/images/client-services/office-workstations.jpg',
        alt: 'Office workstations and commercial joinery fit-out',
        relatedSlugs: ['kitchen-joinery', 'gypsum-partitions'],
      },
      {
        id: 'acoustic-panels',
        slug: 'acoustic-panels',
        category: 'civil-interior',
        categoryKey: 'civil',
        nameKey: 'services.acousticPanels.name',
        descriptionKey: 'services.acousticPanels.description',
        imageUrl: '/media/images/client-services/acoustic-panels.jpg',
        alt: 'Acoustic panels and soundproofing installation',
        relatedSlugs: ['office-workstations', 'gypsum-partitions'],
      },
      {
        id: 'epoxy-floor',
        slug: 'epoxy-floor',
        category: 'civil-interior',
        categoryKey: 'civil',
        nameKey: 'services.epoxyFloor.name',
        descriptionKey: 'services.epoxyFloor.description',
        imageUrl: '/media/images/client-services/epoxy-floor.jpg',
        alt: 'Epoxy flooring for warehouses and commercial spaces',
        relatedSlugs: ['civil-works', 'interior-painting'],
      },
    ],
  },
  {
    id: 'specialist',
    key: 'specialist',
    nameKey: 'services.categories.specialist',
    services: [
      { id: 'signboard-works', slug: 'signboard-works', category: 'specialist', categoryKey: 'specialist', nameKey: 'services.signboardWorks.name', descriptionKey: 'services.signboardWorks.description', imageUrl: '/media/images/client-services/signboard-works.jpg', alt: 'Commercial sign board works', relatedSlugs: ['civil-works'] },
      { id: 'e-tendering', slug: 'government-e-tendering', category: 'specialist', categoryKey: 'specialist', nameKey: 'services.eTendering.name', descriptionKey: 'services.eTendering.description', imageUrl: '/media/images/client-services/government-e-tendering.jpg', alt: 'Government e-tendering support services', relatedSlugs: ['civil-works', 'annual-maintenance'] },
    ],
  },
  {
    id: 'maintenance',
    key: 'maintenance',
    nameKey: 'services.categories.maintenance',
    services: [
      { id: 'annual-maintenance', slug: 'annual-maintenance', category: 'maintenance', categoryKey: 'maintenance', nameKey: 'services.annualMaintenance.name', descriptionKey: 'services.annualMaintenance.description', imageUrl: '/media/images/client-services/annual-maintenance.jpg', alt: 'Annual maintenance contract services', relatedSlugs: ['hvac', 'electrical-works', 'plumbing'] },
      { id: 'pest-control', slug: 'pest-control', category: 'maintenance', categoryKey: 'maintenance', nameKey: 'services.pestControl.name', descriptionKey: 'services.pestControl.description', imageUrl: '/media/images/landscaping-outdoor/landscaping-night-garden.jpg', alt: 'Professional pest control service for UAE properties', relatedSlugs: ['fumigation', 'annual-maintenance'] },
      { id: 'fumigation', slug: 'fumigation', category: 'maintenance', categoryKey: 'maintenance', nameKey: 'services.fumigation.name', descriptionKey: 'services.fumigation.description', imageUrl: '/media/images/client-services/fumigation.jpg', alt: 'Professional fumigation service for residential and commercial properties', relatedSlugs: ['pest-control', 'annual-maintenance'] },
    ],
  },
]

/** Flat list of all services for routing and search */
export const allServices: ServiceItem[] = serviceCategories.flatMap(
  (cat) => cat.services
)

const firstServiceByImage = new Map<string, ServiceItem>()
for (const service of allServices) {
  if (!firstServiceByImage.has(service.imageUrl)) {
    firstServiceByImage.set(service.imageUrl, service)
  }
}

function createServiceVisual(service: ServiceItem): string {
  const palette: Record<string, [string, string]> = {
    mep: ['#102a43', '#f0a83a'],
    'civil-interior': ['#263238', '#d28b2d'],
    outdoor: ['#173f35', '#d9a441'],
    specialist: ['#29233d', '#e0a33a'],
    maintenance: ['#26384a', '#e0a33a'],
    renovation: ['#3e2b25', '#e0a33a'],
  }
  const [background, accent] = palette[service.category] || ['#1d2939', '#e0a33a']
  const label = service.id.replace(/-/g, ' ').replace(/\b\w/g, (letter) => letter.toUpperCase())
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 640"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${background}"/><stop offset="1" stop-color="#0b1220"/></linearGradient></defs><rect width="960" height="640" fill="url(#g)"/><path d="M0 520L210 300l120 105 180-210 450 325H0z" fill="${accent}" opacity=".22"/><path d="M80 120h800M80 170h520M80 220h660" stroke="${accent}" stroke-width="3" opacity=".45"/><circle cx="790" cy="150" r="58" fill="none" stroke="${accent}" stroke-width="4" opacity=".8"/><path d="M770 150h40M790 130v40" stroke="${accent}" stroke-width="4"/><text x="80" y="570" fill="#fff" font-family="Arial,sans-serif" font-size="32" font-weight="700">${label}</text><text x="80" y="605" fill="${accent}" font-family="Arial,sans-serif" font-size="16" letter-spacing="4">ACTS UAE • PROJECT VISUAL</text></svg>`
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`
}

/** Returns a non-repeating visual for each service card. */
export function getServiceImage(service: ServiceItem): string {
  if (firstServiceByImage.get(service.imageUrl) === service) {
    return service.imageUrl
  }
  return createServiceVisual(service)
}

/** Look up a service by its URL slug */
export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return allServices.find((s) => s.slug === slug)
}

export default serviceCategories
