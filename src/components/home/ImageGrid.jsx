// @ts-nocheck
export default function ImageGrid({ images }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {images.map((image, index) => (
        <div 
          key={index}
          className={`relative rounded-xl overflow-hidden group ${image.span} ${index === 0 || index === 1 ? 'h-48 md:h-56' : 'h-48 md:h-56'}`}
        >
          <img 
            src={image.url} 
            alt={image.alt} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className={`absolute inset-0 bg-linear-to-t ${image.gradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>                               
        </div>
      ))}
    </div>
  );
}
