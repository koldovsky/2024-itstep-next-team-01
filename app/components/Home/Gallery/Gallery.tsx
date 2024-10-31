import PhotoGallery from './PhotoGallery'
import DescriptionInfo from './DescriptionInfo'

export default function FlowerShopPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <PhotoGallery />
            <DescriptionInfo />
        </div>
    )
}