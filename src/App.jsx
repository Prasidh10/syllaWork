import Chat from './components/Chat';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">AI Chat Application</h1>
        <Chat />
      </div>
    </div>
  );
}

export default App;
