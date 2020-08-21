import StackedLayout from 'src/layouts/StackedLayout'

const AboutPage = () => {
  return (
    <StackedLayout>
      <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <p className="prose prose-lg mb-4">
            The imagery of trees has inspired countless songs.
          </p>
          <p className="prose prose-lg mb-4">
            Some of the best songs about tress are about specific types of
            trees, while other good songs about trees are about the forest in
            general.
          </p>
          <p className="prose prose-lg mb-4">
            Many great tree songs have the word tree in the title and some great
            songs about trees reference leaves and branches in the lyrics.
          </p>
        </div>
      </div>
    </StackedLayout>
  )
}

export default AboutPage
