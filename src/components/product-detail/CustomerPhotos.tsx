import Image from 'next/image';

// Mock data for customer photos - replace with actual data source if available
const customerPhotosMock = [
  { id: 'cust1', src: 'https://picsum.photos/300/400?random=51', alt: 'Customer with pet 1', dataAiHint: 'customer pet' },
  { id: 'cust2', src: 'https://picsum.photos/300/400?random=52', alt: 'Customer with pet 2', dataAiHint: 'person dog' },
  { id: 'cust3', src: 'https://picsum.photos/300/400?random=53', alt: 'Customer with pet 3', dataAiHint: 'owner cat' },
  { id: 'cust4', src: 'https://picsum.photos/300/400?random=54', alt: 'Customer with pet 4', dataAiHint: 'happy pet owner' },
  { id: 'cust5', src: 'https://picsum.photos/300/400?random=55', alt: 'Customer with pet 5', dataAiHint: 'pet love' },
];

export default function CustomerPhotos() {
  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container max-w-screen-2xl">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
          Our Lovely Customers
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
          {customerPhotosMock.map((photo) => (
            <div key={photo.id} className="aspect-[3/4] relative rounded-lg overflow-hidden shadow-md group">
              <Image
                src={photo.src}
                alt={photo.alt}
                layout="fill"
                objectFit="cover"
                className="group-hover:scale-105 transition-transform duration-300"
                data-ai-hint={photo.dataAiHint}
              />
            </div>
          ))}
        </div>
        {/* Add pagination dots or carousel controls here if implementing a carousel */}
      </div>
    </section>
  );
}
