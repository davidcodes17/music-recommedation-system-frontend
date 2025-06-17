import type { GenreTrackResponse } from "@/types/prompt";

interface TrackListProps {
  data: GenreTrackResponse | null;
}

const TrackList: React.FC<TrackListProps> = ({ data }) => {
  return (
    <div className="px-10 pb-32 pt-5 space-y-4 overflow-y-auto max-h-[calc(100vh-180px)]">
      {data?.tracks?.map((track, key) => (
        <div
          key={key}
          className="bg-white rounded-xl shadow-sm p-5 flex items-center justify-between hover:shadow-md transition-all"
        >
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              {track.name}
            </h2>
            <p className="text-sm text-gray-500">{track.artist}</p>
          </div>
          <div className="flex items-center gap-3">
            <a href={track.url} target="_blank" rel="noopener noreferrer">
              <img src="/spot.png" alt="Spotify Logo" className="w-20" />
            </a>
            {track.preview && (
              <audio controls className="h-8">
                <source src={track.preview} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            )}
          </div>
        </div>
      ))}

      {!data && (
        <div className="text-center text-gray-400 pt-20 text-sm">
          Enter a prompt to receive personalized tracks 🎵
        </div>
      )}
    </div>
  );
};

export default TrackList;
