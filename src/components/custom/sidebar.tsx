import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// ICONOS DE EJEMPLO
const HomeIcon = () => (
  <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
    <path d="M9.005 16.545a2.997 2.997 0 0 1 2.997-2.997A2.997 2.997 0 0 1 15 16.545V22h7V11.543L12 2 2 11.543V22h7.005Z"></path>
  </svg>
);
  const SearchIcon = () => (
      <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
      <path
        d="M19 10.5A8.5 8.5 0 1 1 10.5 2a8.5 8.5 0 0 1 8.5 8.5Z"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      ></path>
      <line
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        x1="16.511"
        x2="22"
        y1="16.511"
        y2="22"
      ></line>
    </svg>
  );
  const ExploreIcon = () => (
    <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
      <path d="m13.173 13.164 1.491-3.829-3.83 1.49ZM12.001.5a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12.001.5Zm5.35 7.443-2.478 6.369a1 1 0 0 1-.57.569l-6.36 2.47a1 1 0 0 1-1.294-1.294l2.48-6.369a1 1 0 0 1 .57-.569l6.359-2.47a1 1 0 0 1 1.294 1.294Z"></path>
    </svg>
  );
  const ReelsIcon = () => (
    <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
      <line
        fill="none"
        stroke="currentColor"
        stroke-linejoin="round"
        stroke-width="2"
        x1="2.049"
        x2="21.95"
        y1="7.002"
        y2="7.002"
      ></line>
      <line
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        x1="13.504"
        x2="16.362"
        y1="2.001"
        y2="7.002"
      ></line>
      <line
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        x1="7.207"
        x2="10.002"
        y1="2.11"
        y2="7.002"
      ></line>
      <path
        d="M2 12.001v3.449c0 2.849.698 4.006 1.606 4.945.94.908 2.098 1.607 4.946 1.607h6.896c2.848 0 4.006-.699 4.946-1.607.908-.939 1.606-2.096 1.606-4.945V8.552c0-2.848-.698-4.006-1.606-4.945C19.454 2.699 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.546 2 5.704 2 8.552Z"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      ></path>
      <path
        d="M9.763 17.664a.908.908 0 0 1-.454-.787V11.63a.909.909 0 0 1 1.364-.788l4.545 2.624a.909.909 0 0 1 0 1.575l-4.545 2.624a.91.91 0 0 1-.91 0Z"
        fill-rule="evenodd"
      ></path>
    </svg>
  );
  const MensajesIcon = () => (
    <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
      <path
        d="M12.003 2.001a9.705 9.705 0 1 1 0 19.4 10.876 10.876 0 0 1-2.895-.384.798.798 0 0 0-.533.04l-1.984.876a.801.801 0 0 1-1.123-.708l-.054-1.78a.806.806 0 0 0-.27-.569 9.49 9.49 0 0 1-3.14-7.175 9.65 9.65 0 0 1 10-9.7Z"
        fill="none"
        stroke="currentColor"
        stroke-miterlimit="10"
        stroke-width="1.739"
      ></path>
      <path
        d="M17.79 10.132a.659.659 0 0 0-.962-.873l-2.556 2.05a.63.63 0 0 1-.758.002L11.06 9.47a1.576 1.576 0 0 0-2.277.42l-2.567 3.98a.659.659 0 0 0 .961.875l2.556-2.049a.63.63 0 0 1 .759-.002l2.452 1.84a1.576 1.576 0 0 0 2.278-.42Z"
        fill-rule="evenodd"
      ></path>
    </svg>
  );
  const HeartIcon = () => (
    <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
      <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
    </svg>
  );
  const PlusIcon = () => (
    <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
      <path
        d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552Z"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      ></path>
      <line
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        x1="6.545"
        x2="17.455"
        y1="12.001"
        y2="12.001"
      ></line>
      <line
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        x1="12.003"
        x2="12.003"
        y1="6.545"
        y2="17.455"
      ></line>
    </svg>
  );
  const ProfileIcon = () => (
    <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
    </svg>
  );
  const CircleIcon = () => (
    <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12,4c4.4184,0,8,3.5816,8,8,0,4.4176-3.5816,8-8,8s-8-3.5824-8-8c0-4.4184,3.5816-8,8-8M12,1C5.93458,1,1,5.93458,1,12s4.93458,11,11,11,11-4.93458,11-11S18.06542,1,12,1h0Z"></path>
    </svg>
  );
  const ThreadsIcon = () => (
    <svg className="w-full h-full" fill="currentColor" viewBox="0 0 192 192">
          <path
        d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z"
      ></path>
    </svg>
  );
  const MenuIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <line
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        x1="3"
        x2="21"
        y1="4"
        y2="4"
      ></line>
      <line
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        x1="3"
        x2="21"
        y1="12"
        y2="12"
      ></line>
      <line
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        x1="3"
        x2="21"
        y1="20"
        y2="20"
      ></line>
    </svg>
  );
  
  const TuercaIconDrow = () => (
    <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
      <circle
        cx="12"
        cy="12"
        fill="none"
        r="8.635"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      ></circle>
      <path
        d="M14.232 3.656a1.269 1.269 0 0 1-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 0 1-.796.66m-.001 16.688a1.269 1.269 0 0 1 .796.66l.505.996h1.862l.505-.996a1.269 1.269 0 0 1 .796-.66M3.656 9.768a1.269 1.269 0 0 1-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 0 1 .66.796m16.688-.001a1.269 1.269 0 0 1 .66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 0 1-.66-.796M7.678 4.522a1.269 1.269 0 0 1-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 0 1-.096 1.03m11.8 11.799a1.269 1.269 0 0 1 1.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 0 1 .096-1.03m-14.956.001a1.269 1.269 0 0 1 .096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 0 1 1.03.096m11.799-11.8a1.269 1.269 0 0 1-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 0 1-1.03-.096"
        fill="none"
        stroke="currentColor"
        stroke-linejoin="round"
        stroke-width="2"
      ></path>
    </svg>
);
  
const TuActividad = () => (
  <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 1H5C2.794 1 1 2.794 1 5v14c0 2.206 1.794 4 4 4h14c2.206 0 4-1.794 4-4V5c0-2.206-1.794-4-4-4ZM5 3h14c1.103 0 2 .897 2 2v6h-2.382l-2.723-5.447c-.34-.678-1.45-.678-1.79 0L9 15.764l-2.105-4.211A1 1 0 0 0 6 11H3V5c0-1.103.897-2 2-2Zm14 18H5c-1.103 0-2-.897-2-2v-6h2.382l2.723 5.447a1 1 0 0 0 1.79 0L15 8.236l2.105 4.211A1 1 0 0 0 18 13h3v6c0 1.103-.897 2-2 2Z"/>
  </svg>
);

const Guardado = () => (
  <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
    <polygon
      fill="none"
      points="20 21 12 13.44 4 21 4 3 20 3 20 21"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
    />
  </svg>
);
  
const CambioTema = () => (
  <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
    <path d="M11.502,22.99805A11.4313,11.4313,0,0,1,.49512,14.83691a.99889.99889,0,0,1,.251-.998,1.01148,1.01148,0,0,1,.99707-.249,9.43041,9.43041,0,0,0,2.75879.40821A9.5082,9.5082,0,0,0,13.5957,1.74023a1.00039,1.00039,0,0,1,1.24707-1.248A11.501,11.501,0,0,1,11.502,22.99805ZM3.08984,15.91211A9.49991,9.49991,0,0,0,21.002,11.498,9.57875,9.57875,0,0,0,15.916,3.08594,11.5083,11.5083,0,0,1,3.08984,15.91211Z"/>
  </svg>
);

const Problema = () => (
  <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.001 1h-12a5.006 5.006 0 0 0-5 5v9.005a5.006 5.006 0 0 0 5 5h2.514l2.789 2.712a1 1 0 0 0 1.394 0l2.787-2.712h2.516a5.006 5.006 0 0 0 5-5V6a5.006 5.006 0 0 0-5-5Zm3 14.005a3.003 3.003 0 0 1-3 3h-2.936a1 1 0 0 0-.79.387l-2.274 2.212-2.276-2.212a1 1 0 0 0-.79-.387H6a3.003 3.003 0 0 1-3-3V6a3.003 3.003 0 0 1 3-3h12a3.003 3.003 0 0 1 3 3Zm-9-1.66a1.229 1.229 0 1 0 1.228 1.228A1.23 1.23 0 0 0 12 13.344Zm0-8.117a1.274 1.274 0 0 0-.933.396 1.108 1.108 0 0 0-.3.838l.347 4.861a.892.892 0 0 0 1.77 0l.348-4.86a1.106 1.106 0 0 0-.3-.838A1.272 1.272 0 0 0 12 5.228Z"/>
  </svg>
);


  export default function Sidebar() {
    return (
      <div className="fixed top-0 left-0 z-50 h-screen w-72 bg-white border-r flex-shrink-0">
        <div className="flex flex-col h-full">
          {/* LOGO */}
          <div className="flex items-center justify-start mx-6 mt-10">
            <Link href="/">
              <svg
                aria-label="Instagram"
                fill="currentColor"
                height="29"
                role="img"
                viewBox="32 4 113 32"
                width="103"
              >
                <title>Instagram</title>
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M37.82 4.11c-2.32.97-4.86 3.7-5.66 7.13-1.02 4.34 3.21 6.17 3.56 5.57.4-.7-.76-.94-1-3.2-.3-2.9 1.05-6.16 2.75-7.58.32-.27.3.1.3.78l-.06 14.46c0 3.1-.13 4.07-.36 5.04-.23.98-.6 1.64-.33 1.9.32.28 1.68-.4 2.46-1.5a8.13 8.13 0 0 0 1.33-4.58c.07-2.06.06-5.33.07-7.19 0-1.7.03-6.71-.03-9.72-.02-.74-2.07-1.51-3.03-1.1Zm82.13 14.48a9.42 9.42 0 0 1-.88 3.75c-.85 1.72-2.63 2.25-3.39-.22-.4-1.34-.43-3.59-.13-5.47.3-1.9 1.14-3.35 2.53-3.22 1.38.13 2.02 1.9 1.87 5.16ZM96.8 28.57c-.02 2.67-.44 5.01-1.34 5.7-1.29.96-3 .23-2.65-1.72.31-1.72 1.8-3.48 4-5.64l-.01 1.66Zm-.35-10a10.56 10.56 0 0 1-.88 3.77c-.85 1.72-2.64 2.25-3.39-.22-.5-1.69-.38-3.87-.13-5.25.33-1.78 1.12-3.44 2.53-3.44 1.38 0 2.06 1.5 1.87 5.14Zm-13.41-.02a9.54 9.54 0 0 1-.87 3.8c-.88 1.7-2.63 2.24-3.4-.23-.55-1.77-.36-4.2-.13-5.5.34-1.95 1.2-3.32 2.53-3.2 1.38.14 2.04 1.9 1.87 5.13Zm61.45 1.81c-.33 0-.49.35-.61.93-.44 2.02-.9 2.48-1.5 2.48-.66 0-1.26-1-1.42-3-.12-1.58-.1-4.48.06-7.37.03-.59-.14-1.17-1.73-1.75-.68-.25-1.68-.62-2.17.58a29.65 29.65 0 0 0-2.08 7.14c0 .06-.08.07-.1-.06-.07-.87-.26-2.46-.28-5.79 0-.65-.14-1.2-.86-1.65-.47-.3-1.88-.81-2.4-.2-.43.5-.94 1.87-1.47 3.48l-.74 2.2.01-4.88c0-.5-.34-.67-.45-.7a9.54 9.54 0 0 0-1.8-.37c-.48 0-.6.27-.6.67 0 .05-.08 4.65-.08 7.87v.46c-.27 1.48-1.14 3.49-2.09 3.49s-1.4-.84-1.4-4.68c0-2.24.07-3.21.1-4.83.02-.94.06-1.65.06-1.81-.01-.5-.87-.75-1.27-.85-.4-.09-.76-.13-1.03-.11-.4.02-.67.27-.67.62v.55a3.71 3.71 0 0 0-1.83-1.49c-1.44-.43-2.94-.05-4.07 1.53a9.31 9.31 0 0 0-1.66 4.73c-.16 1.5-.1 3.01.17 4.3-.33 1.44-.96 2.04-1.64 2.04-.99 0-1.7-1.62-1.62-4.4.06-1.84.42-3.13.82-4.99.17-.8.04-1.2-.31-1.6-.32-.37-1-.56-1.99-.33-.7.16-1.7.34-2.6.47 0 0 .05-.21.1-.6.23-2.03-1.98-1.87-2.69-1.22-.42.39-.7.84-.82 1.67-.17 1.3.9 1.91.9 1.91a22.22 22.22 0 0 1-3.4 7.23v-.7c-.01-3.36.03-6 .05-6.95.02-.94.06-1.63.06-1.8 0-.36-.22-.5-.66-.67-.4-.16-.86-.26-1.34-.3-.6-.05-.97.27-.96.65v.52a3.7 3.7 0 0 0-1.84-1.49c-1.44-.43-2.94-.05-4.07 1.53a10.1 10.1 0 0 0-1.66 4.72c-.15 1.57-.13 2.9.09 4.04-.23 1.13-.89 2.3-1.63 2.3-.95 0-1.5-.83-1.5-4.67 0-2.24.07-3.21.1-4.83.02-.94.06-1.65.06-1.81 0-.5-.87-.75-1.27-.85-.42-.1-.79-.13-1.06-.1-.37.02-.63.35-.63.6v.56a3.7 3.7 0 0 0-1.84-1.49c-1.44-.43-2.93-.04-4.07 1.53-.75 1.03-1.35 2.17-1.66 4.7a15.8 15.8 0 0 0-.12 2.04c-.3 1.81-1.61 3.9-2.68 3.9-.63 0-1.23-1.21-1.23-3.8 0-3.45.22-8.36.25-8.83l1.62-.03c.68 0 1.29.01 2.19-.04.45-.02.88-1.64.42-1.84-.21-.09-1.7-.17-2.3-.18-.5-.01-1.88-.11-1.88-.11s.13-3.26.16-3.6c.02-.3-.35-.44-.57-.53a7.77 7.77 0 0 0-1.53-.44c-.76-.15-1.1 0-1.17.64-.1.97-.15 3.82-.15 3.82-.56 0-2.47-.11-3.02-.11-.52 0-1.08 2.22-.36 2.25l3.2.09-.03 6.53v.47c-.53 2.73-2.37 4.2-2.37 4.2.4-1.8-.42-3.15-1.87-4.3-.54-.42-1.6-1.22-2.79-2.1 0 0 .69-.68 1.3-2.04.43-.96.45-2.06-.61-2.3-1.75-.41-3.2.87-3.63 2.25a2.61 2.61 0 0 0 .5 2.66l.15.19c-.4.76-.94 1.78-1.4 2.58-1.27 2.2-2.24 3.95-2.97 3.95-.58 0-.57-1.77-.57-3.43 0-1.43.1-3.58.19-5.8.03-.74-.34-1.16-.96-1.54a4.33 4.33 0 0 0-1.64-.69c-.7 0-2.7.1-4.6 5.57-.23.69-.7 1.94-.7 1.94l.04-6.57c0-.16-.08-.3-.27-.4a4.68 4.68 0 0 0-1.93-.54c-.36 0-.54.17-.54.5l-.07 10.3c0 .78.02 1.69.1 2.09.08.4.2.72.36.91.15.2.33.34.62.4.28.06 1.78.25 1.86-.32.1-.69.1-1.43.89-4.2 1.22-4.31 2.82-6.42 3.58-7.16.13-.14.28-.14.27.07l-.22 5.32c-.2 5.37.78 6.36 2.17 6.36 1.07 0 2.58-1.06 4.2-3.74l2.7-4.5 1.58 1.46c1.28 1.2 1.7 2.36 1.42 3.45-.21.83-1.02 1.7-2.44.86-.42-.25-.6-.44-1.01-.71-.23-.15-.57-.2-.78-.04-.53.4-.84.92-1.01 1.55-.17.61.45.94 1.09 1.22.55.25 1.74.47 2.5.5 2.94.1 5.3-1.42 6.94-5.34.3 3.38 1.55 5.3 3.72 5.3 1.45 0 2.91-1.88 3.55-3.72.18.75.45 1.4.8 1.96 1.68 2.65 4.93 2.07 6.56-.18.5-.69.58-.94.58-.94a3.07 3.07 0 0 0 2.94 2.87c1.1 0 2.23-.52 3.03-2.31.09.2.2.38.3.56 1.68 2.65 4.93 2.07 6.56-.18l.2-.28.05 1.4-1.5 1.37c-2.52 2.3-4.44 4.05-4.58 6.09-.18 2.6 1.93 3.56 3.53 3.69a4.5 4.5 0 0 0 4.04-2.11c.78-1.15 1.3-3.63 1.26-6.08l-.06-3.56a28.55 28.55 0 0 0 5.42-9.44s.93.01 1.92-.05c.32-.02.41.04.35.27-.07.28-1.25 4.84-.17 7.88.74 2.08 2.4 2.75 3.4 2.75 1.15 0 2.26-.87 2.85-2.17l.23.42c1.68 2.65 4.92 2.07 6.56-.18.37-.5.58-.94.58-.94.36 2.2 2.07 2.88 3.05 2.88 1.02 0 2-.42 2.78-2.28.03.82.08 1.49.16 1.7.05.13.34.3.56.37.93.34 1.88.18 2.24.11.24-.05.43-.25.46-.75.07-1.33.03-3.56.43-5.21.67-2.79 1.3-3.87 1.6-4.4.17-.3.36-.35.37-.03.01.64.04 2.52.3 5.05.2 1.86.46 2.96.65 3.3.57 1 1.27 1.05 1.83 1.05.36 0 1.12-.1 1.05-.73-.03-.31.02-2.22.7-4.96.43-1.79 1.15-3.4 1.41-4 .1-.21.15-.04.15 0-.06 1.22-.18 5.25.32 7.46.68 2.98 2.65 3.32 3.34 3.32 1.47 0 2.67-1.12 3.07-4.05.1-.7-.05-1.25-.48-1.25Z"
                />
              </svg>
            </Link>
          </div>

          {/* NAVIGATION */}
          <nav className="mt-10 px-4 space-y-2 flex-1 overflow-y-auto">
            {navItems.map((item) => (
              <NavLink key={item.label} {...item} />
            ))}
          </nav>

          {/* SECCIÓN FIJA INFERIOR */}
          <div className="px-4 py-4 mt-auto">
            <div className="space-y-2">
              <div className="ml-[5px]">
                <NavLink label="Meta AI" href="#" icon={<CircleIcon />} />
                <NavLink label="Threads" href="#" icon={<ThreadsIcon />} />
              </div>
              {/* Dropdown Más */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="ml-[8px] flex items-center w-full p-2 text-left text-sm rounded-lg hover:bg-gray-100">
                    <MenuIcon />
                    <span className="ml-3 text-sm">Más</span>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-64 rounded-xl bg-gray-50 shadow-lg">
                  <div className="px-4 py-2 text-sm text-gray-700 space-y-2">
                    <div className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-md cursor-pointer">
                      <div className="w-5 h-5"><TuercaIconDrow/></div>
                      Configuración
                    </div>
                    <div className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-md cursor-pointer">
                     
                      <div className="w-5 h-5"><TuActividad/></div>
                      Tu actividad
                    </div>
                    <div className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-md cursor-pointer">

                      <div className="w-5 h-5"><Guardado/></div>
                      Guardado
                    </div>
                    <div className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-md cursor-pointer">
                     
                      <div className="w-5 h-5"><CambioTema/></div>
                      Cambiar apariencia
                    </div>
                    <div className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-md cursor-pointer">
                      <div className="w-5 h-5"><Problema/></div>
                      Reportar un problema
                    </div>
                    <hr className="my-2 border-gray-300" />
                    <div className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-md cursor-pointer">
                      {/* ICONO CAMBIAR CUENTA */}{" "}
                      <div className="w-5 h-5">{/* Tu SVG */}</div>
                      Cambiar de cuenta
                    </div>
                    <div className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-md cursor-pointer">
                      {/* ICONO SALIR */}{" "}
                      <div className="w-5 h-5">{/* Tu SVG */}</div>
                      Salir
                    </div>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
    );
}

const navItems = [
  { label: 'Inicio', href: '/vistas', icon: <HomeIcon /> },
  { label: 'Buscar', href: '/vistas', icon: <SearchIcon /> },
  { label: 'Explorar', href: '/vistas/explore', icon: <ExploreIcon />, active: true },
  { label: 'Reels', href: '/vistas/reels', icon: <ReelsIcon /> },
  { label: 'Mensajes', href: '/vistas/mensajes', icon: <MensajesIcon /> },
  { label: 'Notificaciones', href: '/vistas/notificaciones', icon: <HeartIcon /> },
  { label: 'Crear', href: '/vistas/crear', icon: <PlusIcon /> },
  { label: 'Perfil', href: '/vistas/perfil', icon: <ProfileIcon /> },
];

type NavLinkProps = {
  href: string;
  label: string;
  icon: React.ReactNode;
  active?: boolean;
};

function NavLink({ href, label, icon, active }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`flex items-center p-2 text-sm lg:text-base xl:text-lg rounded-lg transition-colors hover:bg-gray-100 ${
        active ? "bg-gray-100 font-semibold text-black" : "text-black"
      }`}
    >
      <div className="w-5 h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7">{icon}</div>
      <span className="ml-3 text-base">
        {label}
      </span>
    </Link>
  );
}
  
