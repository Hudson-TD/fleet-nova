export default function AssetCard(props) {
  return (
    <div>
      <div className="flex flex-col max-w-sm p-6 bg-zinc-400 border border-gray-200 rounded-lg shadow">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {props.model_year}
        </h5>
        <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {props.make}
        </h3>
        <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {props.model}
        </h3>
        <div>
          <p className="font-normal text-white">Overview</p>
          <p className="text-white">Recent Work Order:</p>
        </div>
        <div className="mt-6 text-white font-bold">
          <p>Actions:</p>
          <div className="flex flex-col grow gap-2 mt-4 p-2">
            <button className="bg-white border border-white rounded-full text-center text-blue-900 text-md p-2">
              Add Work Order
            </button>
            <button className="bg-white border border-white rounded-full text-center text-blue-900 text-md p-2">
              View Vehicle Report
            </button>
            <button className="bg-white border border-white rounded-full text-center text-blue-900 text-md p-2">
              Archive Asset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
