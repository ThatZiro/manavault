import AppRouter from "./presentation/routes/AppRouter";
import {PopupProvider} from "./presentation/providers/popupcontext";

function App() {
  return (
    <PopupProvider>
      <AppRouter />
    </PopupProvider>
  )
}

export default App
