import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import ActivitiesSection from './components/ActivitiesSection';
import HowWeWorkSection from './components/HowWeWorkSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import VideosPage from './pages/VideosPage';
import GalleryPage from './pages/GalleryPage';
import BlogPage from './pages/BlogPage';
import ServicesPage from './pages/ServicesPage';
import BalloonModelingPage from './pages/BalloonModelingPage';
import TattooFacePaintingPage from './pages/TattooFacePaintingPage';
import NailArtistryPage from './pages/NailArtistryPage';
import PotteryArtistsPage from './pages/PotteryArtistsPage';
import KidsJewelryMakingPage from './pages/KidsJewelryMakingPage';
import OrigamiCraftsPage from './pages/OrigamiCraftsPage';
import HairBraidingPage from './pages/HairBraidingPage';
import CaricatureArtistPage from './pages/CaricatureArtistPage';
import MugCaricaturePage from './pages/MugCaricaturePage';
import ClayModelingPage from './pages/ClayModelingPage';
import MehandiArtistryPage from './pages/MehandiArtistryPage';
import PebbleStoneArtPage from './pages/PebbleStoneArtPage';
import TaroFaceReadingPage from './pages/TaroFaceReadingPage';
import RiceArtKeyChainPage from './pages/RiceArtKeyChainPage';
import BottlePaintingPage from './pages/BottlePaintingPage';
import PotPaintingPage from './pages/PotPaintingPage';
import WaxHandMakingPage from './pages/WaxHandMakingPage';
import TurbanPagriTyingPage from './pages/TurbanPagriTyingPage';
import LacBangleMakingPage from './pages/LacBangleMakingPage';
import BlockPrintingPage from './pages/BlockPrintingPage';
import SandArtBottlePage from './pages/SandArtBottlePage';
import AmusementsPage from './pages/AmusementsPage';
import BouncyCastlePage from './pages/BouncyCastlePage';
import HorseRidingPage from './pages/HorseRidingPage';
import MerryGoRoundPage from './pages/MerryGoRoundPage';
import ZorbingBallsPage from './pages/ZorbingBallsPage';
import TrampolinePage from './pages/TrampolinePage';
import RingTossGamePage from './pages/RingTossGamePage';
import CasinoGamesPage from './pages/CasinoGamesPage';
import CarnivalGamesPage from './pages/CarnivalGamesPage';
import VRGamesPage from './pages/VRGamesPage';
import BalloonShootingPage from './pages/BalloonShootingPage';
import BalloonDecorationsPage from './pages/BalloonDecorationsPage';
import ThemeDecorationsPage from './pages/ThemeDecorationsPage';
import HeliumGasBalloonsPage from './pages/HeliumGasBalloonsPage';
import CorporateEventsPage from './pages/CorporateEventsPage';
import DJMusicPage from './pages/DJMusicPage';
import StageFlexBackgroundPage from './pages/StageFlexBackgroundPage';
import LEDWallPage from './pages/LEDWallPage';
import MCTeamBuildingPage from './pages/MCTeamBuildingPage';
import PrintingServicesPage from './pages/PrintingServicesPage';
import DanceTroupePage from './pages/DanceTroupePage';
import DanceTroupeDetailPage from './pages/DanceTroupeDetailPage';
import DandiyaDancePage from './pages/DandiyaDancePage';
import DolluKunithaPage from './pages/DolluKunithaPage';
import PunjabiDholPage from './pages/PunjabiDholPage';
import ChendaMelamPage from './pages/ChendaMelamPage';
import FlashMobPage from './pages/FlashMobPage';
import DJSoundStagePage from './pages/DJSoundStagePage';
import EventSFXPage from './pages/EventSFXPage';
import FlowerDecorationsPage from './pages/FlowerDecorationsPage';
import PartyFunEatablesPage from './pages/PartyFunEatablesPage';
import PopcornPage from './pages/PopcornPage';
import CottonCandyPage from './pages/CottonCandyPage';
import ChocolateFountainPage from './pages/ChocolateFountainPage';
import SweetCornPage from './pages/SweetCornPage';
import GolaIceCrushPage from './pages/GolaIceCrushPage';
import BombayMithaiwalaPage from './pages/BombayMithaiwalaPage';
import PhotographyVideoPage from './pages/PhotographyVideoPage';
import ThreeSixtySelfieBoothPage from './pages/ThreeSixtySelfieBoothPage';
import DigitalCaricaturePage from './pages/DigitalCaricaturePage';
import PhotoBoothPrintPage from './pages/PhotoBoothPrintPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#about' || hash === '#/about') {
        setCurrentPage('about');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (
        hash === '#photography-video/photo-booth-print' ||
        hash === '#/photography-video/photo-booth-print' ||
        hash === '#photo-booth-print' ||
        hash === '#/photo-booth-print' ||
        hash === '#photo-booth' ||
        hash === '#/photo-booth' ||
        hash === '#instant-photo-print' ||
        hash === '#/instant-photo-print' ||
        hash === '#insta-photo-print' ||
        hash === '#/insta-photo-print'
      ) {
        setCurrentPage('photo-booth-print');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (
        hash === '#photography-video/digital-caricature-booth' ||
        hash === '#/photography-video/digital-caricature-booth' ||
        hash === '#digital-caricature-booth' ||
        hash === '#/digital-caricature-booth' ||
        hash === '#digital-caricature' ||
        hash === '#/digital-caricature' ||
        hash === '#digital-caricatures' ||
        hash === '#/digital-caricatures'
      ) {
        setCurrentPage('digital-caricature-booth');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (
        hash === '#photography-video/360-video-selfie-booth' ||
        hash === '#/photography-video/360-video-selfie-booth' ||
        hash === '#360-video-selfie-booth' ||
        hash === '#/360-video-selfie-booth' ||
        hash === '#360-selfie-booth' ||
        hash === '#/360-selfie-booth' ||
        hash === '#360-booth' ||
        hash === '#/360-booth'
      ) {
        setCurrentPage('360-video-selfie-booth');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (
        hash === '#photography-video' ||
        hash === '#/photography-video' ||
        hash === '#photography' ||
        hash === '#/photography' ||
        hash === '#videography' ||
        hash === '#/videography' ||
        hash === '#photo-video' ||
        hash === '#/photo-video'
      ) {
        setCurrentPage('photography-video');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (
        hash === '#party-fun-eatables/bombay-mithaiwala' ||
        hash === '#/party-fun-eatables/bombay-mithaiwala' ||
        hash === '#party-fun-eatables/bombay-mitthaiwala' ||
        hash === '#/party-fun-eatables/bombay-mitthaiwala' ||
        hash === '#bombay-mithaiwala' ||
        hash === '#/bombay-mithaiwala' ||
        hash === '#bombay-mitthaiwala' ||
        hash === '#/bombay-mitthaiwala' ||
        hash === '#mithaiwala' ||
        hash === '#/mithaiwala'
      ) {
        setCurrentPage('bombay-mithaiwala');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (
        hash === '#party-fun-eatables/gola-ice-crush' ||
        hash === '#/party-fun-eatables/gola-ice-crush' ||
        hash === '#gola-ice-crush' ||
        hash === '#/gola-ice-crush' ||
        hash === '#ice-gola' ||
        hash === '#/ice-gola' ||
        hash === '#chuski' ||
        hash === '#/chuski'
      ) {
        setCurrentPage('gola-ice-crush');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (
        hash === '#party-fun-eatables/sweet-corn' ||
        hash === '#/party-fun-eatables/sweet-corn' ||
        hash === '#sweet-corn' ||
        hash === '#/sweet-corn' ||
        hash === '#live-sweet-corn' ||
        hash === '#/live-sweet-corn'
      ) {
        setCurrentPage('sweet-corn');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (
        hash === '#party-fun-eatables/chocolate-fountain' ||
        hash === '#/party-fun-eatables/chocolate-fountain' ||
        hash === '#chocolate-fountain' ||
        hash === '#/chocolate-fountain' ||
        hash === '#fountain-chocolate' ||
        hash === '#/fountain-chocolate'
      ) {
        setCurrentPage('chocolate-fountain');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (
        hash === '#party-fun-eatables/cotton-candy' ||
        hash === '#/party-fun-eatables/cotton-candy' ||
        hash === '#cotton-candy' ||
        hash === '#/cotton-candy' ||
        hash === '#candy-floss' ||
        hash === '#/candy-floss'
      ) {
        setCurrentPage('cotton-candy');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (
        hash === '#party-fun-eatables/popcorn' ||
        hash === '#/party-fun-eatables/popcorn' ||
        hash === '#popcorn' ||
        hash === '#/popcorn' ||
        hash === '#popcorn-counter' ||
        hash === '#/popcorn-counter'
      ) {
        setCurrentPage('popcorn');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (
        hash === '#party-fun-eatables' ||
        hash === '#/party-fun-eatables' ||
        hash === '#fun-eatables' ||
        hash === '#/fun-eatables' ||
        hash === '#eatables' ||
        hash === '#/eatables' ||
        hash.startsWith('#eatables-overview')
      ) {
        setCurrentPage('party-fun-eatables');
        if (!hash.startsWith('#eatables-overview')) {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      } else if (
        hash === '#flower-decorations' ||
        hash === '#/flower-decorations' ||
        hash === '#flower-decoration' ||
        hash === '#/flower-decoration' ||
        hash === '#flowers' ||
        hash === '#/flowers' ||
        hash.startsWith('#flowers-overview')
      ) {
        setCurrentPage('flower-decorations');
        if (!hash.startsWith('#flowers-overview')) {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      } else if (
        hash === '#special-effects-event-sfx' ||
        hash === '#/special-effects-event-sfx' ||
        hash === '#event-sfx' ||
        hash === '#/event-sfx' ||
        hash === '#sfx' ||
        hash === '#/sfx' ||
        hash.startsWith('#sfx-overview')
      ) {
        setCurrentPage('event-sfx');
        if (!hash.startsWith('#sfx-overview')) {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      } else if (
        hash === '#dj-sound-stage-lighting' ||
        hash === '#/dj-sound-stage-lighting' ||
        hash === '#dj-sound-stage-lights' ||
        hash === '#/dj-sound-stage-lights' ||
        hash === '#dj-sound-stage' ||
        hash === '#/dj-sound-stage' ||
        hash === '#dj-stage' ||
        hash === '#/dj-stage' ||
        hash === '#dj-stage-lighting' ||
        hash === '#/dj-stage-lighting' ||
        hash.startsWith('#dj-overview')
      ) {
        setCurrentPage('dj-sound-stage-lighting');
        if (!hash.startsWith('#dj-overview')) {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      } else if (
        hash === '#dance-troup/flash-mob-dance' ||
        hash === '#/dance-troup/flash-mob-dance' ||
        hash === '#flash-mob-dance' ||
        hash === '#/flash-mob-dance' ||
        hash === '#flash-mob' ||
        hash === '#/flash-mob' ||
        hash === '#flashmob' ||
        hash === '#/flashmob'
      ) {
        setCurrentPage('flash-mob');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (
        hash === '#dance-troup/kerala-chenda-melam' ||
        hash === '#/dance-troup/kerala-chenda-melam' ||
        hash === '#chenda-melam' ||
        hash === '#/chenda-melam' ||
        hash === '#chenda' ||
        hash === '#/chenda' ||
        hash === '#kerala-chenda-melam' ||
        hash === '#/kerala-chenda-melam'
      ) {
        setCurrentPage('chenda-melam');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (
        hash === '#dance-troup/punjabi-dhol' ||
        hash === '#/dance-troup/punjabi-dhol' ||
        hash === '#punjabi-dhol' ||
        hash === '#/punjabi-dhol' ||
        hash === '#dhol' ||
        hash === '#/dhol'
      ) {
        setCurrentPage('punjabi-dhol');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (
        hash === '#dance-troup/dollu-kunitha' ||
        hash === '#/dance-troup/dollu-kunitha' ||
        hash === '#dollu-kunitha' ||
        hash === '#/dollu-kunitha' ||
        hash === '#dollu' ||
        hash === '#/dollu'
      ) {
        setCurrentPage('dollu-kunitha');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (
        hash === '#dance-troup/dandiya-dance' ||
        hash === '#/dance-troup/dandiya-dance' ||
        hash === '#dandiya-dance' ||
        hash === '#/dandiya-dance' ||
        hash === '#dhandiya-troupe' ||
        hash === '#/dhandiya-troupe' ||
        hash === '#dandiya' ||
        hash === '#/dandiya'
      ) {
        setCurrentPage('dandiya-dance');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (
        hash === '#dance-troup/dance-troupe' ||
        hash === '#/dance-troup/dance-troupe' ||
        hash === '#dance-troupe-detail' ||
        hash === '#/dance-troupe-detail' ||
        hash === '#dance-troupe-act' ||
        hash === '#/dance-troupe-act'
      ) {
        setCurrentPage('dance-troupe-detail');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (
        hash === '#dance-troup' ||
        hash === '#/dance-troup' ||
        hash === '#dance-troupe' ||
        hash === '#/dance-troupe' ||
        hash === '#dance' ||
        hash === '#/dance'
      ) {
        setCurrentPage('dance-troupe');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (
        hash === '#corporate-events/printing-services' ||
        hash === '#/corporate-events/printing-services' ||
        hash === '#corporate/printing-services' ||
        hash === '#/corporate/printing-services' ||
        hash === '#printing-services' ||
        hash === '#/printing-services' ||
        hash === '#printing' ||
        hash === '#/printing'
      ) {
        setCurrentPage('printing-services');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (
        hash === '#corporate-events/mc-team-building-activities' ||
        hash === '#/corporate-events/mc-team-building-activities' ||
        hash === '#corporate/mc-team-building-activities' ||
        hash === '#/corporate/mc-team-building-activities' ||
        hash === '#mc-team-building-activities' ||
        hash === '#/mc-team-building-activities' ||
        hash === '#mc-games' ||
        hash === '#/mc-games' ||
        hash === '#team-building' ||
        hash === '#/team-building'
      ) {
        setCurrentPage('mc-team-building');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (
        hash === '#corporate-events/led-wall' ||
        hash === '#/corporate-events/led-wall' ||
        hash === '#corporate/led-wall' ||
        hash === '#/corporate/led-wall' ||
        hash === '#led-wall' ||
        hash === '#/led-wall' ||
        hash === '#led' ||
        hash === '#/led'
      ) {
        setCurrentPage('led-wall');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (
        hash === '#corporate-events/stage-flex-background' ||
        hash === '#/corporate-events/stage-flex-background' ||
        hash === '#corporate/stage-flex-background' ||
        hash === '#/corporate/stage-flex-background' ||
        hash === '#stage-flex-background' ||
        hash === '#/stage-flex-background' ||
        hash === '#stage-background' ||
        hash === '#/stage-background'
      ) {
        setCurrentPage('stage-flex-background');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (
        hash === '#corporate-events/dj-music' ||
        hash === '#/corporate-events/dj-music' ||
        hash === '#corporate/dj-music' ||
        hash === '#/corporate/dj-music' ||
        hash === '#dj-music' ||
        hash === '#/dj-music' ||
        hash === '#dj' ||
        hash === '#/dj'
      ) {
        setCurrentPage('dj-music');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (
        hash === '#corporate-events' ||
        hash === '#/corporate-events' ||
        hash === '#corporate' ||
        hash === '#/corporate' ||
        hash === '#corporate-event' ||
        hash === '#/corporate-event'
      ) {
        setCurrentPage('corporate-events');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (
        hash === '#balloon-decorations/helium-gas-balloons' ||
        hash === '#/balloon-decorations/helium-gas-balloons' ||
        hash === '#birthday-balloon-decorations/helium-gas-balloons' ||
        hash === '#/birthday-balloon-decorations/helium-gas-balloons' ||
        hash === '#helium-gas-balloons' ||
        hash === '#/helium-gas-balloons' ||
        hash === '#helium-balloons' ||
        hash === '#/helium-balloons'
      ) {
        setCurrentPage('helium-balloons');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (
        hash === '#balloon-decorations/theme-decorations' ||
        hash === '#/balloon-decorations/theme-decorations' ||
        hash === '#birthday-balloon-decorations/theme-decorations' ||
        hash === '#/birthday-balloon-decorations/theme-decorations' ||
        hash === '#theme-decorations' ||
        hash === '#/theme-decorations' ||
        hash === '#theme-decoration' ||
        hash === '#/theme-decoration'
      ) {
        setCurrentPage('theme-decorations');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (
        hash === '#birthday-balloon-decorations' ||
        hash === '#/birthday-balloon-decorations' ||
        hash === '#balloon-decorations' ||
        hash === '#/balloon-decorations' ||
        hash === '#balloon-decoration' ||
        hash === '#/balloon-decoration'
      ) {
        setCurrentPage('balloon-decorations');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (
        hash === '#amusements/balloon-shooting' ||
        hash === '#/amusements/balloon-shooting' ||
        hash === '#balloon-shooting' ||
        hash === '#/balloon-shooting' ||
        hash === '#balloon-shoot' ||
        hash === '#/balloon-shoot'
      ) {
        setCurrentPage('balloon-shooting');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (
        hash === '#amusements/vr-games' ||
        hash === '#/amusements/vr-games' ||
        hash === '#vr-games' ||
        hash === '#/vr-games' ||
        hash === '#vr-gaming' ||
        hash === '#/vr-gaming' ||
        hash === '#vr' ||
        hash === '#/vr'
      ) {
        setCurrentPage('vr-games');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (
        hash === '#amusements/carnival-games' ||
        hash === '#/amusements/carnival-games' ||
        hash === '#carnival-games' ||
        hash === '#/carnival-games' ||
        hash === '#carnival' ||
        hash === '#/carnival'
      ) {
        setCurrentPage('carnival-games');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (
        hash === '#amusements/casino-games' ||
        hash === '#/amusements/casino-games' ||
        hash === '#casino-games' ||
        hash === '#/casino-games' ||
        hash === '#casino' ||
        hash === '#/casino'
      ) {
        setCurrentPage('casino-games');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (
        hash === '#amusements/ring-toss-game' ||
        hash === '#/amusements/ring-toss-game' ||
        hash === '#ring-toss-game' ||
        hash === '#/ring-toss-game' ||
        hash === '#ring-toss' ||
        hash === '#/ring-toss' ||
        hash === '#ring-game' ||
        hash === '#/ring-game'
      ) {
        setCurrentPage('ring-toss');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (
        hash === '#amusements/trampoline' ||
        hash === '#/amusements/trampoline' ||
        hash === '#trampoline' ||
        hash === '#/trampoline'
      ) {
        setCurrentPage('trampoline');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (
        hash === '#amusements/zorbing-balls' ||
        hash === '#/amusements/zorbing-balls' ||
        hash === '#zorbing-balls' ||
        hash === '#/zorbing-balls' ||
        hash === '#zorbing' ||
        hash === '#/zorbing' ||
        hash === '#water-zorbing' ||
        hash === '#/water-zorbing'
      ) {
        setCurrentPage('zorbing-balls');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (
        hash === '#amusements/merry-go-round' ||
        hash === '#/amusements/merry-go-round' ||
        hash === '#merry-go-round' ||
        hash === '#/merry-go-round' ||
        hash === '#carousel' ||
        hash === '#/carousel'
      ) {
        setCurrentPage('merry-go-round');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (
        hash === '#amusements/horse-riding' ||
        hash === '#/amusements/horse-riding' ||
        hash === '#horse-riding' ||
        hash === '#/horse-riding'
      ) {
        setCurrentPage('horse-riding');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (
        hash === '#amusements/bouncing-castle' ||
        hash === '#/amusements/bouncing-castle' ||
        hash === '#bouncing-castle' ||
        hash === '#/bouncing-castle' ||
        hash === '#bouncy-castle' ||
        hash === '#/bouncy-castle'
      ) {
        setCurrentPage('bouncing-castle');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (
        hash === '#services/sand-art' ||
        hash === '#/services/sand-art' ||
        hash === '#services/sand-art-bottle' ||
        hash === '#/services/sand-art-bottle' ||
        hash === '#sand-art' ||
        hash === '#/sand-art' ||
        hash === '#sand-art-bottle' ||
        hash === '#/sand-art-bottle'
      ) {
        setCurrentPage('sand-art');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (
        hash === '#services/block-printing' ||
        hash === '#/services/block-printing' ||
        hash === '#services/block-printing-bag' ||
        hash === '#/services/block-printing-bag' ||
        hash === '#block-printing' ||
        hash === '#/block-printing' ||
        hash === '#block-print' ||
        hash === '#/block-print'
      ) {
        setCurrentPage('block-printing');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (
        hash === '#services/lac-bangle-making' ||
        hash === '#/services/lac-bangle-making' ||
        hash === '#services/lac-bangles-making' ||
        hash === '#/services/lac-bangles-making' ||
        hash === '#lac-bangle-making' ||
        hash === '#/lac-bangle-making' ||
        hash === '#lac-bangles' ||
        hash === '#/lac-bangles'
      ) {
        setCurrentPage('lac-bangles');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (
        hash === '#services/turban-pagri-tying' ||
        hash === '#/services/turban-pagri-tying' ||
        hash === '#services/turban-tying' ||
        hash === '#/services/turban-tying' ||
        hash === '#turban-tying' ||
        hash === '#/turban-tying' ||
        hash === '#turban-pagri' ||
        hash === '#/turban-pagri'
      ) {
        setCurrentPage('turban-tying');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (
        hash === '#services/wax-hand-making' ||
        hash === '#/services/wax-hand-making' ||
        hash === '#wax-hand-making' ||
        hash === '#/wax-hand-making' ||
        hash === '#wax-hand' ||
        hash === '#/wax-hand'
      ) {
        setCurrentPage('wax-hand-making');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (
        hash === '#services/pot-painting' ||
        hash === '#/services/pot-painting' ||
        hash === '#pot-painting' ||
        hash === '#/pot-painting'
      ) {
        setCurrentPage('pot-painting');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (
        hash === '#services/bottle-painting' ||
        hash === '#/services/bottle-painting' ||
        hash === '#bottle-painting' ||
        hash === '#/bottle-painting'
      ) {
        setCurrentPage('bottle-painting');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (
        hash === '#services/rice-arts-key-chain' ||
        hash === '#/services/rice-arts-key-chain' ||
        hash === '#rice-art' ||
        hash === '#/rice-art'
      ) {
        setCurrentPage('rice-art');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (
        hash === '#services/taro-face-reading-palmistry' ||
        hash === '#/services/taro-face-reading-palmistry' ||
        hash === '#taro-reading' ||
        hash === '#/taro-reading' ||
        hash === '#tarot' ||
        hash === '#/tarot'
      ) {
        setCurrentPage('taro-reading');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (
        hash === '#services/pebble-stone-arts' ||
        hash === '#/services/pebble-stone-arts' ||
        hash === '#pebble-stone-arts' ||
        hash === '#/pebble-stone-arts' ||
        hash === '#pebble-art' ||
        hash === '#/pebble-art'
      ) {
        setCurrentPage('pebble-art');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (
        hash === '#services/mehendi' ||
        hash === '#/services/mehendi' ||
        hash === '#mehendi' ||
        hash === '#/mehendi' ||
        hash === '#mehandi' ||
        hash === '#/mehandi'
      ) {
        setCurrentPage('mehendi');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (
        hash === '#services/clay-modeling' ||
        hash === '#/services/clay-modeling' ||
        hash === '#clay-modeling' ||
        hash === '#/clay-modeling'
      ) {
        setCurrentPage('clay-modeling');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (
        hash === '#services/mug-caricature' ||
        hash === '#/services/mug-caricature' ||
        hash === '#mug-caricature' ||
        hash === '#/mug-caricature'
      ) {
        setCurrentPage('mug-caricature');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (
        hash === '#services/caricature-artist' ||
        hash === '#/services/caricature-artist' ||
        hash === '#caricature-artist' ||
        hash === '#/caricature-artist'
      ) {
        setCurrentPage('caricature-artist');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (
        hash === '#services/hair-braidings' ||
        hash === '#/services/hair-braidings' ||
        hash === '#hair-braiding' ||
        hash === '#/hair-braiding'
      ) {
        setCurrentPage('hair-braiding');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (
        hash === '#services/origami-craft' ||
        hash === '#/services/origami-craft' ||
        hash === '#origami-crafts' ||
        hash === '#/origami-crafts'
      ) {
        setCurrentPage('origami-crafts');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (
        hash === '#services/kids-jewelry-making' ||
        hash === '#/services/kids-jewelry-making' ||
        hash === '#kids-jewelry' ||
        hash === '#/kids-jewelry'
      ) {
        setCurrentPage('kids-jewelry');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (
        hash === '#services/pottery-artists' ||
        hash === '#/services/pottery-artists' ||
        hash === '#pottery-artists' ||
        hash === '#/pottery-artists'
      ) {
        setCurrentPage('pottery-artists');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (
        hash === '#services/nails-artistry' ||
        hash === '#/services/nails-artistry' ||
        hash === '#nail-artistry' ||
        hash === '#/nail-artistry'
      ) {
        setCurrentPage('nail-artistry');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (
        hash === '#services/tattoo-artists-face-painting' ||
        hash === '#/services/tattoo-artists-face-painting' ||
        hash === '#tattoo-artists' ||
        hash === '#/tattoo-artists'
      ) {
        setCurrentPage('tattoo-artists');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (
        hash === '#services/balloon-modelings' ||
        hash === '#/services/balloon-modelings' ||
        hash === '#balloon-modeling' ||
        hash === '#/balloon-modeling'
      ) {
        setCurrentPage('balloon-modeling');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#services' || hash === '#/services') {
        setCurrentPage('services');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (
        hash === '#amusements-games' ||
        hash === '#/amusements-games' ||
        hash === '#amusements' ||
        hash === '#/amusements'
      ) {
        setCurrentPage('amusements');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#contact' || hash === '#/contact') {
        setCurrentPage('contact');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#videos' || hash === '#/videos') {
        setCurrentPage('videos');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#gallery' || hash === '#/gallery') {
        setCurrentPage('gallery');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#blog' || hash === '#/blog') {
        setCurrentPage('blog');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentPage('home');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#FFFDF9] flex flex-col font-sans">
      <Navbar currentPage={currentPage} />
      <main className="flex-1 w-full">
        {currentPage === 'about' ? (
          <>
            <AboutPage />
            <CtaSection />
          </>
        ) : currentPage === 'photo-booth-print' ? (
          <>
            <PhotoBoothPrintPage />
            <CtaSection />
          </>
        ) : currentPage === 'digital-caricature-booth' ? (
          <>
            <DigitalCaricaturePage />
            <CtaSection />
          </>
        ) : currentPage === '360-video-selfie-booth' ? (
          <>
            <ThreeSixtySelfieBoothPage />
            <CtaSection />
          </>
        ) : currentPage === 'photography-video' ? (
          <>
            <PhotographyVideoPage />
            <CtaSection />
          </>
        ) : currentPage === 'bombay-mithaiwala' ? (
          <>
            <BombayMithaiwalaPage />
            <CtaSection />
          </>
        ) : currentPage === 'gola-ice-crush' ? (
          <>
            <GolaIceCrushPage />
            <CtaSection />
          </>
        ) : currentPage === 'sweet-corn' ? (
          <>
            <SweetCornPage />
            <CtaSection />
          </>
        ) : currentPage === 'chocolate-fountain' ? (
          <>
            <ChocolateFountainPage />
            <CtaSection />
          </>
        ) : currentPage === 'cotton-candy' ? (
          <>
            <CottonCandyPage />
            <CtaSection />
          </>
        ) : currentPage === 'popcorn' ? (
          <>
            <PopcornPage />
            <CtaSection />
          </>
        ) : currentPage === 'party-fun-eatables' ? (
          <>
            <PartyFunEatablesPage />
            <CtaSection />
          </>
        ) : currentPage === 'flower-decorations' ? (
          <>
            <FlowerDecorationsPage />
            <CtaSection />
          </>
        ) : currentPage === 'event-sfx' ? (
          <>
            <EventSFXPage />
            <CtaSection />
          </>
        ) : currentPage === 'dj-sound-stage-lighting' ? (
          <>
            <DJSoundStagePage />
            <CtaSection />
          </>
        ) : currentPage === 'flash-mob' ? (
          <>
            <FlashMobPage />
            <CtaSection />
          </>
        ) : currentPage === 'chenda-melam' ? (
          <>
            <ChendaMelamPage />
            <CtaSection />
          </>
        ) : currentPage === 'punjabi-dhol' ? (
          <>
            <PunjabiDholPage />
            <CtaSection />
          </>
        ) : currentPage === 'dollu-kunitha' ? (
          <>
            <DolluKunithaPage />
            <CtaSection />
          </>
        ) : currentPage === 'dandiya-dance' ? (
          <>
            <DandiyaDancePage />
            <CtaSection />
          </>
        ) : currentPage === 'dance-troupe-detail' ? (
          <>
            <DanceTroupeDetailPage />
            <CtaSection />
          </>
        ) : currentPage === 'dance-troupe' ? (
          <>
            <DanceTroupePage />
            <CtaSection />
          </>
        ) : currentPage === 'printing-services' ? (
          <>
            <PrintingServicesPage />
            <CtaSection />
          </>
        ) : currentPage === 'mc-team-building' ? (
          <>
            <MCTeamBuildingPage />
            <CtaSection />
          </>
        ) : currentPage === 'led-wall' ? (
          <>
            <LEDWallPage />
            <CtaSection />
          </>
        ) : currentPage === 'stage-flex-background' ? (
          <>
            <StageFlexBackgroundPage />
            <CtaSection />
          </>
        ) : currentPage === 'dj-music' ? (
          <>
            <DJMusicPage />
            <CtaSection />
          </>
        ) : currentPage === 'corporate-events' ? (
          <>
            <CorporateEventsPage />
            <CtaSection />
          </>
        ) : currentPage === 'helium-balloons' ? (
          <>
            <HeliumGasBalloonsPage />
            <CtaSection />
          </>
        ) : currentPage === 'theme-decorations' ? (
          <>
            <ThemeDecorationsPage />
            <CtaSection />
          </>
        ) : currentPage === 'balloon-decorations' ? (
          <>
            <BalloonDecorationsPage />
            <CtaSection />
          </>
        ) : currentPage === 'balloon-shooting' ? (
          <>
            <BalloonShootingPage />
            <CtaSection />
          </>
        ) : currentPage === 'vr-games' ? (
          <>
            <VRGamesPage />
            <CtaSection />
          </>
        ) : currentPage === 'carnival-games' ? (
          <>
            <CarnivalGamesPage />
            <CtaSection />
          </>
        ) : currentPage === 'casino-games' ? (
          <>
            <CasinoGamesPage />
            <CtaSection />
          </>
        ) : currentPage === 'ring-toss' ? (
          <>
            <RingTossGamePage />
            <CtaSection />
          </>
        ) : currentPage === 'trampoline' ? (
          <>
            <TrampolinePage />
            <CtaSection />
          </>
        ) : currentPage === 'zorbing-balls' ? (
          <>
            <ZorbingBallsPage />
            <CtaSection />
          </>
        ) : currentPage === 'merry-go-round' ? (
          <>
            <MerryGoRoundPage />
            <CtaSection />
          </>
        ) : currentPage === 'horse-riding' ? (
          <>
            <HorseRidingPage />
            <CtaSection />
          </>
        ) : currentPage === 'bouncing-castle' ? (
          <>
            <BouncyCastlePage />
            <CtaSection />
          </>
        ) : currentPage === 'sand-art' ? (
          <>
            <SandArtBottlePage />
            <CtaSection />
          </>
        ) : currentPage === 'block-printing' ? (
          <>
            <BlockPrintingPage />
            <CtaSection />
          </>
        ) : currentPage === 'lac-bangles' ? (
          <>
            <LacBangleMakingPage />
            <CtaSection />
          </>
        ) : currentPage === 'turban-tying' ? (
          <>
            <TurbanPagriTyingPage />
            <CtaSection />
          </>
        ) : currentPage === 'wax-hand-making' ? (
          <>
            <WaxHandMakingPage />
            <CtaSection />
          </>
        ) : currentPage === 'pot-painting' ? (
          <>
            <PotPaintingPage />
            <CtaSection />
          </>
        ) : currentPage === 'bottle-painting' ? (
          <>
            <BottlePaintingPage />
            <CtaSection />
          </>
        ) : currentPage === 'rice-art' ? (
          <>
            <RiceArtKeyChainPage />
            <CtaSection />
          </>
        ) : currentPage === 'taro-reading' ? (
          <>
            <TaroFaceReadingPage />
            <CtaSection />
          </>
        ) : currentPage === 'pebble-art' ? (
          <>
            <PebbleStoneArtPage />
            <CtaSection />
          </>
        ) : currentPage === 'mehendi' ? (
          <>
            <MehandiArtistryPage />
            <CtaSection />
          </>
        ) : currentPage === 'clay-modeling' ? (
          <>
            <ClayModelingPage />
            <CtaSection />
          </>
        ) : currentPage === 'mug-caricature' ? (
          <>
            <MugCaricaturePage />
            <CtaSection />
          </>
        ) : currentPage === 'caricature-artist' ? (
          <>
            <CaricatureArtistPage />
            <CtaSection />
          </>
        ) : currentPage === 'hair-braiding' ? (
          <>
            <HairBraidingPage />
            <CtaSection />
          </>
        ) : currentPage === 'origami-crafts' ? (
          <>
            <OrigamiCraftsPage />
            <CtaSection />
          </>
        ) : currentPage === 'kids-jewelry' ? (
          <>
            <KidsJewelryMakingPage />
            <CtaSection />
          </>
        ) : currentPage === 'pottery-artists' ? (
          <>
            <PotteryArtistsPage />
            <CtaSection />
          </>
        ) : currentPage === 'nail-artistry' ? (
          <>
            <NailArtistryPage />
            <CtaSection />
          </>
        ) : currentPage === 'tattoo-artists' ? (
          <>
            <TattooFacePaintingPage />
            <CtaSection />
          </>
        ) : currentPage === 'balloon-modeling' ? (
          <>
            <BalloonModelingPage />
            <CtaSection />
          </>
        ) : currentPage === 'services' ? (
          <>
            <ServicesPage />
            <CtaSection />
          </>
        ) : currentPage === 'amusements' ? (
          <>
            <AmusementsPage />
            <CtaSection />
          </>
        ) : currentPage === 'contact' ? (
          <>
            <ContactPage />
          </>
        ) : currentPage === 'videos' ? (
          <>
            <VideosPage />
            <CtaSection />
          </>
        ) : currentPage === 'gallery' ? (
          <>
            <GalleryPage />
            <CtaSection />
          </>
        ) : currentPage === 'blog' ? (
          <>
            <BlogPage />
            <CtaSection />
          </>
        ) : (
          <>
            <Hero />
            <AboutSection />
            <ServicesSection />
            <WhyChooseUsSection />
            <ActivitiesSection />
            <HowWeWorkSection />
            <CtaSection />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
