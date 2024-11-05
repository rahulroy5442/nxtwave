import React from "react";
import {mount} from 'enzyme';
import { Provider } from "react-redux";
//import './index.css';

import 'babel-polyfill';
import {render,act,screen} from '@testing-library/react'
import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import CombineReducer from '../../store/reducer/CombineReducer';
import { MemoryRouter } from 'react-router';
import App from "../../App";
import axios from "axios";
import renderer from 'react-test-renderer';
import toJSON from 'enzyme-to-json'
const InitalAxios=axios.create({
	baseURL:'https://media-content.ccbp.in/website/react-assignment'
});

jest.mock("../../store/action/Action.js")
import  {AddResourseItems} from '../../store/action/Action.js';
const initalLoader={
	"id": "1",
	"title": "Nickelson and Sons",
	"icon_url": "http://loremflickr.com/640/480",
	"link": "https://gaseous-pod.net",
	"description": "Eligendi cum eligendi nemo accusamus natus vero dolor.",
	"resource_items": [
	{
	"createdAt": "2022-08-01T08:24:14.476Z",
	"title": "Architect",
	"description": "Aut eum id id. Eos recusandae iure impedit dolores a magni at. Et aut consequatur rerum amet quisquam aliquam.",
	"link": "http://impish-code.info",
	"id": "1"
	},
	{
	"createdAt": "2022-08-01T23:00:27.554Z",
	"title": "Strategist",
	"description": "Officiis placeat dignissimos fuga autem. Sed veniam ratione consequatur rerum necessitatibus reiciendis cumque facere et. Aut et accusantium ea ullam ut aut dolorem.",
	"link": "http://pushy-oatmeal.biz",
	"id": "2"
	},
	{
	"createdAt": "2022-08-01T07:32:00.803Z",
	"title": "Liaison",
	"description": "Officia et aut. Quasi voluptatibus fugit eaque nihil id et rem. Dolorem totam pariatur ut aperiam sit.",
	"link": "http://deep-billboard.org",
	"id": "3"
	},
	{
	"createdAt": "2022-08-01T18:58:06.080Z",
	"title": "Associate",
	"description": "Dolorem quis voluptas. Incidunt corrupti vitae ullam cum quod atque labore nulla. Quis quaerat qui eius. Dolorem sunt perferendis consequatur. Accusantium consectetur deserunt vel quod doloribus quia. Veritatis occaecati est aut ex iste perferendis aperiam aut.",
	"link": "https://offensive-cruise.name",
	"id": "4"
	},
	{
	"createdAt": "2022-08-01T16:46:30.756Z",
	"title": "Liaison",
	"description": "A possimus beatae quod. Blanditiis in ullam vitae est dolores. Tenetur dolores provident est ratione. Nihil autem nam possimus.",
	"link": "https://upright-best-seller.net",
	"id": "5"
	},
	{
	"createdAt": "2022-08-02T01:40:24.407Z",
	"title": "Analyst",
	"description": "Consequatur aperiam veritatis beatae. Doloribus occaecati molestias iusto. Sapiente voluptas nihil inventore unde quisquam harum omnis dignissimos sunt.",
	"link": "http://loose-hello.biz",
	"id": "6"
	},
	{
	"createdAt": "2022-08-01T13:50:35.567Z",
	"title": "Designer",
	"description": "Minima dicta reiciendis. Voluptatem repellendus sapiente a. Corrupti tenetur repellendus earum corporis. Eius dolor velit et voluptatibus. Dolores quo dolorem vitae. Esse ipsa sequi et distinctio voluptates voluptate inventore vel.",
	"link": "https://authorized-span.info",
	"id": "7"
	},
	{
	"createdAt": "2022-08-02T03:03:52.195Z",
	"title": "Assistant",
	"description": "Unde in doloremque unde quo officia est nemo. Autem dolorem itaque velit accusamus delectus. Temporibus ut ut labore sit excepturi dicta vero vel fugiat. Magnam amet optio. Illo sapiente ut velit saepe.",
	"link": "http://cuddly-pilgrimage.net",
	"id": "8"
	},
	{
	"createdAt": "2022-08-01T23:07:58.417Z",
	"title": "Orchestrator",
	"description": "Asperiores doloribus et rerum voluptatem. Et praesentium rerum qui minus. Accusantium velit sit illo. Rerum molestias et modi nisi fugit esse sequi. Molestias voluptate harum ut sunt quis reiciendis adipisci ut est. Ducimus reiciendis magnam qui dolorem at aut rerum.",
	"link": "http://insecure-win.com",
	"id": "9"
	},
	{
	"createdAt": "2022-08-01T06:44:08.926Z",
	"title": "Assistant",
	"description": "Nihil eveniet sed earum quia officia modi non. Et excepturi doloremque doloribus ad unde. Sint accusamus dolor aliquid omnis dolorem. Harum quo alias modi ut est qui. Fugiat itaque eveniet.",
	"link": "http://striped-fawn.org",
	"id": "10"
	},
	{
	"createdAt": "2022-08-02T02:13:03.824Z",
	"title": "Manager",
	"description": "Perferendis voluptatem quia recusandae qui iure iure rerum. Quis dolore porro recusandae ipsum quas hic placeat. Voluptas non laudantium eum in velit ut dolorum neque. Corrupti recusandae voluptas expedita minus cupiditate voluptatem temporibus qui commodi. Mollitia ut qui ea consequatur sit voluptates quibusdam enim qui.",
	"link": "https://quirky-skull.com",
	"id": "11"
	},
	{
	"createdAt": "2022-08-01T09:14:36.357Z",
	"title": "Developer",
	"description": "Quae quidem et voluptas saepe est officia. Nam voluptatem ut qui dolores aut id expedita quidem. Omnis dolor quia et autem et. Vero non non aut ab omnis officiis. Deleniti consequatur nemo non quasi et suscipit tempore ut id.",
	"link": "https://humble-hearth.name",
	"id": "12"
	},
	{
	"createdAt": "2022-08-02T00:00:50.344Z",
	"title": "Designer",
	"description": "Incidunt cumque expedita. Eveniet mollitia aut pariatur atque iste eos voluptate quod omnis. Necessitatibus aspernatur aut sunt. Nulla culpa ea et non tempora consequatur.",
	"link": "http://outlandish-honor.net",
	"id": "13"
	},
	{
	"createdAt": "2022-08-01T06:46:29.529Z",
	"title": "Coordinator",
	"description": "Et qui impedit est itaque quam. Officia quos ea dolorum qui qui ab repellat est porro. Id dolores rerum explicabo. Perspiciatis doloribus officiis praesentium.",
	"link": "https://black-contrary.biz",
	"id": "14"
	},
	{
	"createdAt": "2022-08-01T10:38:07.101Z",
	"title": "Liaison",
	"description": "Et sunt deserunt sit beatae occaecati eum quis. Dolorem alias aliquid sed eum provident quam aut ut. Magnam et cupiditate aut nemo quibusdam quasi earum ab. Nam dignissimos qui dolor eos.",
	"link": "https://favorite-landing.biz",
	"id": "15"
	},
	{
	"createdAt": "2022-08-01T08:37:20.306Z",
	"title": "Producer",
	"description": "Consequatur est consequatur. Ea itaque et similique ipsum voluptatem quia et quisquam. Non consectetur et dolor pariatur voluptatem nihil officiis. Repudiandae voluptate voluptatibus ut sit ad iure vel saepe qui. Quidem consequatur fuga similique. Eius occaecati tempore eaque fugit repudiandae omnis in in.",
	"link": "https://squiggly-discourse.name",
	"id": "16"
	},
	{
	"createdAt": "2022-08-01T19:44:33.906Z",
	"title": "Architect",
	"description": "Facere et eligendi placeat quis. Distinctio itaque sint velit debitis. Qui tenetur et quidem autem quaerat. Ut cupiditate autem aperiam illo aut enim. Numquam harum cumque unde dolorem nam.",
	"link": "http://trained-meal.biz",
	"id": "17"
	},
	{
	"createdAt": "2022-08-01T09:17:28.756Z",
	"title": "Representative",
	"description": "Id distinctio non eos laborum expedita commodi sunt. Officia labore error qui id labore aut quasi. Est maiores architecto mollitia omnis unde vitae ut. Qui et nihil vel neque neque reiciendis atque natus dicta.",
	"link": "http://frightening-honesty.org",
	"id": "18"
	},
	{
	"createdAt": "2022-08-01T14:53:56.729Z",
	"title": "Producer",
	"description": "Rerum earum quo. Eius optio autem provident illum ut aut. Assumenda qui nihil. Quidem quaerat rerum autem praesentium consequatur quis consequatur in sequi. Natus quas impedit iste enim id iusto nihil voluptates. Natus optio dolorem repellendus corrupti quo.",
	"link": "http://flustered-loneliness.info",
	"id": "19"
	},
	{
	"createdAt": "2022-08-01T19:21:11.282Z",
	"title": "Manager",
	"description": "Perferendis doloremque ab ut error dolorem. Consectetur qui recusandae porro maxime. Qui omnis ab iste rerum ut quas dignissimos. Iusto laudantium minus consequatur quia quis qui dolores distinctio voluptatem. Laudantium inventore tempore dignissimos et est aliquid et commodi qui.",
	"link": "http://another-countryside.com",
	"id": "20"
	},
	{
	"createdAt": "2022-08-02T02:35:06.488Z",
	"title": "Executive",
	"description": "Omnis deleniti qui voluptas vel soluta consequatur. Qui rem nostrum dolorem maxime facilis voluptas itaque nihil et. Ea aliquid provident aut dolore quo perspiciatis. Asperiores nesciunt aut numquam aut. Error optio eos hic fuga repellat quo nihil et dolores.",
	"link": "https://surprised-civilisation.info",
	"id": "21"
	},
	{
	"createdAt": "2022-08-01T06:05:53.212Z",
	"title": "Analyst",
	"description": "Consequatur autem qui dolor sit sit ut rerum labore molestiae. Sequi culpa recusandae magnam ratione rerum corrupti dicta. Eius non id. Et cumque itaque sit laudantium fugit rerum consequatur dolor vel.",
	"link": "https://little-seep.com",
	"id": "22"
	},
	{
	"createdAt": "2022-08-01T20:07:25.308Z",
	"title": "Associate",
	"description": "Voluptatum omnis molestiae cumque explicabo possimus atque magni nihil. Est soluta fuga qui consequuntur. Qui nostrum temporibus. Nihil eveniet reiciendis dolore optio necessitatibus ut repudiandae itaque. Amet a quod provident sunt iste est est.",
	"link": "https://far-shower.info",
	"id": "23"
	},
	{
	"createdAt": "2022-08-01T21:12:17.205Z",
	"title": "Officer",
	"description": "Et et numquam nisi velit repellendus magnam. Saepe asperiores id sunt veritatis cum quis sint. Unde a eius ut consequatur aut ad. Maxime veritatis ex qui iusto omnis ab qui nemo. Ut magni ipsam sit. Eligendi omnis veniam veritatis rem sunt commodi.",
	"link": "http://wiry-choir.name",
	"id": "24"
	},
	{
	"createdAt": "2022-08-01T20:26:52.048Z",
	"title": "Executive",
	"description": "Rerum voluptatem error quaerat esse adipisci omnis. Provident inventore nostrum delectus cumque facilis et ut non. Inventore aut officia. Corrupti nesciunt velit asperiores hic id culpa quasi. Libero tempore et repudiandae optio excepturi cumque. Et adipisci molestias dolor eaque vitae asperiores officia.",
	"link": "http://white-wake.com",
	"id": "25"
	},
	{
	"createdAt": "2022-08-02T02:09:33.937Z",
	"title": "Planner",
	"description": "Architecto et provident ab ut dolor nesciunt fugit temporibus. Et incidunt odit iusto iure illo. Molestiae enim quisquam aut quo voluptas repellat. Velit magnam sed. Cupiditate exercitationem sed unde corporis qui.",
	"link": "http://doting-thistle.net",
	"id": "26"
	},
	{
	"createdAt": "2022-08-01T16:07:04.427Z",
	"title": "Developer",
	"description": "Consequatur aut sit doloribus nobis nihil fugit enim minus neque. Doloremque quia dolor ut nihil et ea voluptatem omnis. Provident cum sit doloribus distinctio hic id modi consequatur in. Excepturi est alias et quas ut non consequatur. Est magni in totam reiciendis occaecati sit. Laborum est reiciendis inventore rem deleniti quis sed.",
	"link": "https://flashy-noodles.org",
	"id": "27"
	},
	{
	"createdAt": "2022-08-01T10:13:42.940Z",
	"title": "Coordinator",
	"description": "Modi et odio modi non distinctio illo sit facere. Iste aut praesentium vel vitae pariatur ratione adipisci. Aliquam quidem reiciendis quo voluptatibus rerum est cum ut. Nemo et cum quasi. Odio possimus aspernatur quisquam nostrum voluptatibus expedita.",
	"link": "https://phony-transparency.com",
	"id": "28"
	},
	{
	"createdAt": "2022-08-02T04:48:48.935Z",
	"title": "Liaison",
	"description": "Aspernatur error libero ipsam hic. Accusantium a sapiente fugit eum sed hic enim quo. Quae aut sed at molestiae consequuntur esse. Voluptatem nesciunt qui numquam cumque culpa et. Et odit consequatur cumque distinctio quod magni accusantium labore.",
	"link": "http://bare-jaw.com",
	"id": "29"
	},
	{
	"createdAt": "2022-08-01T11:46:12.728Z",
	"title": "Orchestrator",
	"description": "Minus sed vero tempore nisi qui. Non qui quod voluptatem soluta sed in facere voluptate quos. Nemo tempora inventore deserunt alias iste omnis ea. Velit beatae ut inventore rerum sit quidem deserunt et.",
	"link": "http://tan-stranger.name",
	"id": "30"
	},
	{
	"createdAt": "2022-08-02T01:19:33.435Z",
	"title": "Supervisor",
	"description": "Hic autem officia ex quo et eum corporis. Voluptatem accusamus autem earum recusandae eum vero rerum ex est. Quidem et quia laboriosam est ducimus natus. Nesciunt dolore aliquam error beatae aliquid ut quae rerum. Eum blanditiis sapiente tempora magni a et et consequatur molestiae. Exercitationem possimus sapiente veritatis quibusdam inventore ipsam qui aut.",
	"link": "https://poised-knickers.name",
	"id": "31"
	},
	{
	"createdAt": "2022-08-01T20:12:02.228Z",
	"title": "Coordinator",
	"description": "Facilis neque sed. Fugiat esse dolorem. Maiores vero consequatur dignissimos ut atque.",
	"link": "https://intent-march.biz",
	"id": "32"
	},
	{
	"createdAt": "2022-08-01T07:04:44.303Z",
	"title": "Assistant",
	"description": "Qui consequatur veritatis qui aut. Et fuga ea dolore. Et asperiores sed quisquam officiis iste tenetur. Earum in incidunt non iusto et. Illum dignissimos reprehenderit similique. Consequatur et qui sint libero reprehenderit sed explicabo nesciunt.",
	"link": "http://swift-treaty.name",
	"id": "33"
	},
	{
	"createdAt": "2022-08-01T09:07:32.869Z",
	"title": "Developer",
	"description": "Vel voluptatem nobis enim. Quia est veritatis eligendi qui necessitatibus dolor. Quae sunt dolores laborum quibusdam explicabo nulla. Natus minus eum non sunt qui molestias qui. Eum laudantium ut numquam praesentium exercitationem natus et ea.",
	"link": "https://elementary-average.net",
	"id": "34"
	},
	{
	"createdAt": "2022-08-01T14:14:18.260Z",
	"title": "Supervisor",
	"description": "Ab nam omnis incidunt. Rerum et placeat consequatur qui aliquid. Quia ut nostrum accusamus adipisci nihil nam qui. Ad et iusto eaque et libero in ducimus culpa. Voluptatem at dolor tempora qui corrupti repellat consequatur quam.",
	"link": "http://aching-quill.org",
	"id": "35"
	},
	{
	"createdAt": "2022-08-01T12:01:36.700Z",
	"title": "Producer",
	"description": "Fuga aut voluptatem ex perferendis laborum sit. Debitis qui id voluptates repellendus sit explicabo. Est eaque ad et. Dicta provident cumque harum in excepturi quas architecto.",
	"link": "http://infatuated-jellybeans.biz",
	"id": "36"
	},
	{
	"createdAt": "2022-08-01T23:50:50.983Z",
	"title": "Technician",
	"description": "Animi perspiciatis qui. Cumque molestiae animi eos saepe minima porro ut cumque delectus. Eveniet aut dignissimos sed. Quia ipsa tenetur molestiae dolore. Architecto cumque eligendi neque. Sapiente quia ipsum est et tempora unde sint et.",
	"link": "http://fair-skylight.net",
	"id": "37"
	},
	{
	"createdAt": "2022-08-01T06:58:00.178Z",
	"title": "Director",
	"description": "Laborum velit id natus architecto. Corporis ducimus non dolorem sapiente reprehenderit ipsum dolorem mollitia. Molestiae quia ex. Asperiores quisquam velit.",
	"link": "https://rural-effective.name",
	"id": "38"
	},
	{
	"createdAt": "2022-08-01T17:12:47.765Z",
	"title": "Designer",
	"description": "Placeat sed mollitia est. Recusandae et expedita quisquam sunt voluptatibus consequatur sed. Voluptas alias qui molestiae ratione similique.",
	"link": "http://disgusting-reversal.name",
	"id": "39"
	},
	{
	"createdAt": "2022-08-02T02:25:23.891Z",
	"title": "Architect",
	"description": "Nobis non atque vel et in accusamus. Sed sapiente qui unde sed ut. Animi voluptas magni quasi quaerat dolorem dolorum exercitationem. Eos incidunt natus esse velit quibusdam placeat reiciendis. Cupiditate molestiae cum et aut maxime accusantium. Quis cupiditate enim consectetur reiciendis non voluptas soluta.",
	"link": "http://lone-catalogue.info",
	"id": "40"
	},
	{
	"createdAt": "2022-08-02T02:54:45.425Z",
	"title": "Director",
	"description": "Minima a et ut error. Autem velit porro ea quisquam rem. Nostrum ipsum facilis aut aliquid et et adipisci aperiam.",
	"link": "https://pure-clank.info",
	"id": "41"
	},
	{
	"createdAt": "2022-08-01T10:54:27.111Z",
	"title": "Planner",
	"description": "Architecto atque debitis porro voluptatem a facere. Est ab quibusdam error. Ducimus eum sed consequatur minima iusto a. Eveniet voluptas dolorem rem aut et aut nihil dolores iure.",
	"link": "http://hot-clone.net",
	"id": "42"
	},
	{
	"createdAt": "2022-08-02T04:10:57.495Z",
	"title": "Coordinator",
	"description": "Eum aut quis qui molestias cum. Harum inventore quidem voluptatem. Et quae vel repellendus et. Voluptatem soluta possimus consequatur assumenda molestiae sunt aut ut laboriosam.",
	"link": "https://helpless-ratio.com",
	"id": "43"
	},
	{
	"createdAt": "2022-08-01T17:28:56.277Z",
	"title": "Coordinator",
	"description": "Saepe rerum ut quia. Pariatur rerum dolores quidem aut cupiditate ut incidunt non. Et corporis facere ut odit adipisci. Culpa facere architecto dolore voluptates. Quia commodi amet itaque quisquam quae ea. Tempora temporibus ex aut.",
	"link": "http://baggy-threat.com",
	"id": "44"
	},
	{
	"createdAt": "2022-08-01T10:08:15.361Z",
	"title": "Orchestrator",
	"description": "At et non dolore. Rerum in harum impedit cumque quis. Corrupti ea et similique veritatis eveniet iure. Eius aperiam et occaecati eos eius rem velit. Quia aliquam cum accusantium sint deserunt consequatur quibusdam et deserunt. Deserunt ratione ut voluptate recusandae ab excepturi odio inventore odit.",
	"link": "http://arctic-ex-wife.org",
	"id": "45"
	},
	{
	"createdAt": "2022-08-02T00:41:15.040Z",
	"title": "Producer",
	"description": "Minima molestias vel molestiae voluptas non sed. Quidem voluptas et vitae recusandae fugiat animi aliquam velit pariatur. Officiis quibusdam autem qui facere voluptatem qui. Tenetur sed rerum accusantium nesciunt dolorum est.",
	"link": "https://identical-expansion.org",
	"id": "46"
	},
	{
	"createdAt": "2022-08-01T09:17:44.885Z",
	"title": "Specialist",
	"description": "Nostrum aspernatur eos unde fuga alias pariatur non. Quam ut sed enim error sed dolorum autem. Sed fugiat ut qui sit. Voluptas cumque omnis consequatur optio totam non dolores excepturi. Natus ipsa molestiae commodi voluptate est reprehenderit soluta non.",
	"link": "http://understated-castanet.net",
	"id": "47"
	},
	{
	"createdAt": "2022-08-01T09:44:55.765Z",
	"title": "Strategist",
	"description": "Eligendi consequatur qui corrupti blanditiis temporibus dolor enim quia. Vel voluptatum voluptatum libero ipsa placeat. Facere iure aut at voluptatibus est tempore. Reiciendis eveniet amet dolor.",
	"link": "http://humiliating-dueling.net",
	"id": "48"
	},
	{
	"createdAt": "2022-08-01T23:34:13.278Z",
	"title": "Supervisor",
	"description": "Repellat ea tenetur sunt. Commodi sit vel dolor voluptate consequatur dolore qui. Eos et quod quam ullam eveniet animi. Doloremque asperiores id sunt assumenda et facere porro.",
	"link": "http://blond-domain.info",
	"id": "49"
	},
	{
	"createdAt": "2022-08-02T00:04:47.175Z",
	"title": "Associate",
	"description": "In accusamus sint. Iusto vel adipisci et voluptatem commodi ut aut rerum eveniet. Itaque expedita vitae expedita dignissimos laboriosam et sed. Maxime quo qui recusandae numquam id. Qui ratione exercitationem est et dolorem eaque tempora. Eos autem deserunt ex aut deserunt delectus quos consequatur.",
	"link": "https://perfumed-forage.info",
	"id": "50"
	},
	{
	"createdAt": "2022-08-01T23:41:44.474Z",
	"title": "Analyst",
	"description": "Ipsam rerum excepturi modi iste similique odit nemo mollitia. Ut facere consectetur non itaque. Voluptas veniam ut sint eum natus. Et nulla voluptatem accusamus. Aut fuga iusto.",
	"link": "http://svelte-passing.name",
	"id": "51"
	},
	{
	"createdAt": "2022-08-01T09:07:53.410Z",
	"title": "Associate",
	"description": "Natus assumenda voluptate officia quia. Tenetur consequatur nihil id consequatur laudantium voluptatem dolores. Eos id est est esse. Animi est molestias. Alias natus dolores fugiat.",
	"link": "https://scented-store.name",
	"id": "52"
	},
	{
	"createdAt": "2022-08-01T14:52:02.267Z",
	"title": "Engineer",
	"description": "Sed ut minus ut fugiat ut nihil eius. Illo qui iste adipisci consequatur. Quo nesciunt vel corrupti non deleniti quibusdam. Facilis non atque error.",
	"link": "https://unconscious-jelly.net",
	"id": "53"
	},
	{
	"createdAt": "2022-08-01T08:08:45.459Z",
	"title": "Manager",
	"description": "Est debitis expedita minus aperiam saepe. Non unde possimus id explicabo consequatur. Laudantium dolores ut expedita dolorem. Odio quia non. Molestiae velit vel ullam labore.",
	"link": "https://fancy-motorboat.org",
	"id": "54"
	},
	{
	"createdAt": "2022-08-01T22:19:11.664Z",
	"title": "Executive",
	"description": "Voluptates cumque ad. Molestiae qui ea qui eius asperiores eos. Ratione sint autem vel voluptas nostrum explicabo molestias. Est sunt qui voluptate non voluptatem et. In ut et atque voluptas commodi rerum. Quo adipisci tenetur sit id quia dignissimos.",
	"link": "http://meek-step-mother.info",
	"id": "55"
	},
	{
	"createdAt": "2022-08-01T19:41:51.304Z",
	"title": "Agent",
	"description": "Eaque quod officiis. Aspernatur accusantium laboriosam nihil quia fugiat fugit molestiae quis. Facere autem deleniti dicta minima porro quae. Dolore illum odit. Velit explicabo aliquam. Non facilis perferendis.",
	"link": "http://lawful-cultivar.org",
	"id": "56"
	},
	{
	"createdAt": "2022-08-02T05:06:54.499Z",
	"title": "Designer",
	"description": "Voluptas error totam nobis beatae quidem. Optio minima sit. Numquam adipisci illo et consequuntur nobis minus dolorem. Illo provident et porro ipsa voluptates. Rerum vero reprehenderit voluptatem rerum molestiae voluptatem rerum sint in. Laborum natus fuga quis modi.",
	"link": "https://crisp-race.biz",
	"id": "57"
	},
	{
	"createdAt": "2022-08-01T20:11:34.169Z",
	"title": "Engineer",
	"description": "Reprehenderit doloremque aliquam saepe dolorem voluptas mollitia. Placeat repudiandae consequatur commodi voluptas fuga non ratione unde. Animi non nobis temporibus laudantium tenetur. Vero ea aut aut facere distinctio non maxime accusantium autem. Distinctio exercitationem est et animi magni voluptas. Facilis veniam ut explicabo.",
	"link": "http://enormous-ethernet.biz",
	"id": "58"
	},
	{
	"createdAt": "2022-08-02T01:07:53.368Z",
	"title": "Agent",
	"description": "Id ipsa et eos nisi omnis esse non. Temporibus id rem totam nemo occaecati voluptas qui in. Quaerat dolores ipsam expedita sed necessitatibus facilis nihil.",
	"link": "http://adorable-researcher.org",
	"id": "59"
	},
	{
	"createdAt": "2022-08-01T14:48:19.645Z",
	"title": "Officer",
	"description": "Reprehenderit sunt nam sed vel perspiciatis dolores. Recusandae ex nostrum. Illo facere nesciunt optio dicta iure culpa. Et aut inventore minus quia sed quia culpa aut sunt. Error voluptatem reprehenderit voluptas sit in suscipit ipsam voluptates animi. Minus atque nisi consequatur.",
	"link": "https://proud-implication.net",
	"id": "60"
	},
	{
	"createdAt": "2022-08-01T05:48:46.913Z",
	"title": "Planner",
	"description": "Est ab vel quos est expedita consectetur et. Culpa mollitia quae. Rerum aspernatur voluptas. Vel quos et sed ipsam.",
	"link": "http://open-splendor.org",
	"id": "61"
	},
	{
	"createdAt": "2022-08-01T05:25:51.441Z",
	"title": "Architect",
	"description": "Fugiat libero sit voluptatem quis repellendus aperiam ut sit qui. Beatae velit est illo est. Fuga consequuntur magni exercitationem. Enim magnam atque vel possimus aut nemo at deserunt est. Omnis laborum libero eveniet fugiat molestias.",
	"link": "http://quintessential-chopsticks.org",
	"id": "62"
	},
	{
	"createdAt": "2022-08-02T01:04:58.834Z",
	"title": "Designer",
	"description": "Repellendus optio voluptas earum. Repudiandae ullam nostrum aut laudantium veniam voluptatem perspiciatis. Corrupti omnis voluptas quidem sint consequatur dolorem assumenda nisi vitae. Velit est exercitationem.",
	"link": "https://altruistic-satire.org",
	"id": "63"
	},
	{
	"createdAt": "2022-08-01T13:38:06.196Z",
	"title": "Specialist",
	"description": "Ad optio est reiciendis sunt nisi saepe consequatur ut enim. Sed ratione voluptatem exercitationem blanditiis aut ad aliquid. Qui delectus exercitationem eaque quo sit. Qui et et inventore reiciendis sit aut quos quaerat.",
	"link": "http://adventurous-bough.net",
	"id": "64"
	},
	{
	"createdAt": "2022-08-02T02:50:43.546Z",
	"title": "Technician",
	"description": "Rem cum tenetur non porro illo rerum. Officia officia quis nisi quaerat nulla possimus et dolor quisquam. Id qui soluta fuga quaerat culpa totam.",
	"link": "http://new-visual.net",
	"id": "65"
	},
	{
	"createdAt": "2022-08-01T23:39:34.196Z",
	"title": "Manager",
	"description": "Laborum dignissimos soluta sequi nihil quo minus. Dicta reiciendis nesciunt quo enim quo atque in rerum sint. Fugit sequi pariatur. Corrupti et laboriosam sed itaque aperiam. Ipsam quisquam adipisci at temporibus eum. Voluptate illo ut quis.",
	"link": "https://graceful-exhaustion.org",
	"id": "66"
	},
	{
	"createdAt": "2022-08-01T15:44:55.066Z",
	"title": "Supervisor",
	"description": "Aut dolore accusamus aut. Nobis sed et tempora. Sapiente earum sit doloribus enim et deserunt illo et.",
	"link": "https://reflecting-prize.org",
	"id": "67"
	},
	{
	"createdAt": "2022-08-01T16:08:06.552Z",
	"title": "Liaison",
	"description": "Reiciendis veniam sunt ut dolore fugit rerum magnam perspiciatis. Et quis sint molestiae quia ut unde consequuntur. Excepturi sed et quibusdam doloribus.",
	"link": "https://devoted-glue.biz",
	"id": "68"
	},
	{
	"createdAt": "2022-08-01T16:49:35.426Z",
	"title": "Representative",
	"description": "Dicta recusandae et omnis ea necessitatibus sapiente voluptatem officia. Reiciendis qui enim. Ullam qui est officiis culpa. In voluptatum voluptas corrupti quos in ipsum ipsa enim iure.",
	"link": "http://glaring-marines.biz",
	"id": "69"
	},
	{
	"createdAt": "2022-08-01T22:49:10.534Z",
	"title": "Supervisor",
	"description": "Illo occaecati autem ut eveniet inventore accusamus sunt. Vel excepturi sed dignissimos sit eum voluptas quae temporibus laudantium. Reprehenderit dolores explicabo enim et error accusamus.",
	"link": "https://uneven-controversy.com",
	"id": "70"
	},
	{
	"createdAt": "2022-08-01T17:27:06.743Z",
	"title": "Officer",
	"description": "Tempore consequatur cupiditate. Sint praesentium hic sit. At accusantium ut veniam iusto vel error sed quia assumenda.",
	"link": "http://wide-eyed-cooking.biz",
	"id": "71"
	},
	{
	"createdAt": "2022-08-01T09:24:52.201Z",
	"title": "Representative",
	"description": "Eaque quidem magnam accusamus aspernatur tempora. Quisquam culpa aut voluptatem. Consequatur beatae voluptatem quisquam. Fugit et perspiciatis molestiae quae. Optio qui cum blanditiis deleniti necessitatibus beatae quibusdam voluptates animi.",
	"link": "http://ideal-adoption.name",
	"id": "72"
	},
	{
	"createdAt": "2022-08-02T02:34:07.286Z",
	"title": "Analyst",
	"description": "Dolores et ut qui facere ratione. Magni eius modi iure vel. Omnis dolores accusantium omnis doloribus quam et est. Ut voluptas enim rerum porro quasi. Expedita necessitatibus aut maxime quia dolores doloribus dolorem sunt. Quia cumque sint velit optio odit tempora quia deleniti soluta.",
	"link": "http://tall-proposal.org",
	"id": "73"
	},
	{
	"createdAt": "2022-08-01T08:51:16.805Z",
	"title": "Consultant",
	"description": "Impedit et occaecati et et eos. Voluptatem totam quaerat. A ipsa quia in et sed voluptas dignissimos. Perspiciatis rem qui qui explicabo omnis. Iusto fuga quia voluptas suscipit assumenda nobis ut.",
	"link": "http://unknown-particle.net",
	"id": "74"
	},
	{
	"createdAt": "2022-08-01T18:58:16.665Z",
	"title": "Designer",
	"description": "Accusamus nemo nihil quibusdam culpa voluptatem quis dicta aspernatur. Quis explicabo voluptas mollitia quaerat quibusdam porro voluptates et suscipit. Totam facilis voluptas pariatur optio molestiae facilis. Aut voluptatem occaecati qui quas eum explicabo.",
	"link": "http://sleepy-chronicle.biz",
	"id": "75"
	},
	{
	"createdAt": "2022-08-01T19:00:20.530Z",
	"title": "Director",
	"description": "Est dolor atque rerum. Et et itaque ut laudantium est ea laboriosam eligendi saepe. Aut error beatae odit nesciunt qui. Praesentium tenetur amet. Et qui sunt rem dolor qui ut. Dignissimos sunt magnam et facilis.",
	"link": "http://scratchy-trail.com",
	"id": "76"
	},
	{
	"createdAt": "2022-08-01T07:51:02.964Z",
	"title": "Assistant",
	"description": "Dolor officiis accusantium molestias suscipit perferendis cumque explicabo. Qui consectetur minima quibusdam praesentium iure et quaerat. Unde earum et qui eveniet aut aut in praesentium ratione. Ex explicabo quia alias in autem placeat quia et. Est nam rerum laudantium fuga neque et sunt sit ab. Quaerat odit accusantium.",
	"link": "https://big-sword.com",
	"id": "77"
	},
	{
	"createdAt": "2022-08-01T18:26:31.109Z",
	"title": "Director",
	"description": "Soluta at facere quia eveniet ut ab dolor quae. Quasi dolorem sed. Non doloribus omnis cupiditate architecto dicta officiis animi. Rem consequatur sit aliquid omnis et dolore doloribus eos.",
	"link": "http://noisy-potential.org",
	"id": "78"
	},
	{
	"createdAt": "2022-08-01T17:13:05.184Z",
	"title": "Specialist",
	"description": "Laboriosam numquam earum omnis soluta quia illo molestiae ex laborum. Quo doloribus officiis accusantium enim rerum nihil. Omnis ea excepturi quos.",
	"link": "https://boring-breakpoint.info",
	"id": "79"
	},
	{
	"createdAt": "2022-08-01T20:42:01.676Z",
	"title": "Supervisor",
	"description": "Impedit iusto fugiat itaque eius eligendi est unde consequatur. Exercitationem consequatur velit. Nobis vero voluptas.",
	"link": "http://metallic-clone.org",
	"id": "80"
	},
	{
	"createdAt": "2022-08-02T01:28:36.579Z",
	"title": "Liaison",
	"description": "Esse incidunt et cumque. Consequuntur beatae temporibus mollitia. Voluptate laboriosam magni totam illum dolorem qui. Consectetur tenetur quia quibusdam. Et ut sed sit voluptatum consequatur dolor sed eaque. Aut aspernatur tempore.",
	"link": "http://impish-entertainment.biz",
	"id": "81"
	},
	{
	"createdAt": "2022-08-01T07:45:37.160Z",
	"title": "Supervisor",
	"description": "Laborum iure voluptatem qui ut occaecati sint fugiat asperiores illum. Autem et rerum aspernatur enim autem nulla. Aut nostrum consequuntur similique unde reiciendis. Beatae aut quaerat perspiciatis et.",
	"link": "https://uniform-flare.org",
	"id": "82"
	},
	{
	"createdAt": "2022-08-02T01:59:55.173Z",
	"title": "Specialist",
	"description": "Omnis ab ut deleniti ea nam voluptatem. Quia quaerat sit modi neque ex occaecati deleniti. Sit qui perspiciatis.",
	"link": "http://spiffy-scholarship.biz",
	"id": "83"
	},
	{
	"createdAt": "2022-08-01T08:34:39.342Z",
	"title": "Designer",
	"description": "Repellat et voluptatem reiciendis voluptas cum. Tenetur facilis omnis omnis ab qui est ratione deleniti. Qui quia dignissimos fugit qui quibusdam.",
	"link": "http://testy-spectrum.com",
	"id": "84"
	},
	{
	"createdAt": "2022-08-01T21:35:12.742Z",
	"title": "Consultant",
	"description": "Incidunt magnam reiciendis. Veniam voluptatem suscipit sed dolor itaque voluptatem harum. Nulla voluptates harum illo officiis. Beatae similique et commodi autem ipsam id. Repellendus ex maiores.",
	"link": "https://virtual-surprise.com",
	"id": "85"
	},
	{
	"createdAt": "2022-08-01T15:49:59.016Z",
	"title": "Developer",
	"description": "Quos eos molestiae voluptas. Rerum aliquid qui at a et consequatur quidem similique. Consequatur quasi ut quia tempora.",
	"link": "http://gleeful-newsprint.com",
	"id": "86"
	},
	{
	"createdAt": "2022-08-02T01:51:20.028Z",
	"title": "Engineer",
	"description": "Aperiam tenetur nulla maiores provident eveniet. Nemo perspiciatis ut dicta sint laborum omnis cumque. Animi excepturi qui sunt. Beatae dolorem fuga. Ad nobis expedita quis est et earum.",
	"link": "http://shabby-oncology.com",
	"id": "87"
	},
	{
	"createdAt": "2022-08-01T06:23:40.614Z",
	"title": "Administrator",
	"description": "Cumque soluta ut delectus. Qui fuga architecto veniam qui occaecati aliquam blanditiis. Modi soluta quis est magni ipsa corrupti dolore voluptas. Sequi eum aliquid provident molestias et molestias. Labore laboriosam voluptates consequatur ut voluptate ut occaecati consequatur dignissimos. Doloremque ducimus placeat sit exercitationem omnis consequuntur sit.",
	"link": "http://defensive-overheard.org",
	"id": "88"
	},
	{
	"createdAt": "2022-08-01T15:59:32.046Z",
	"title": "Liaison",
	"description": "Modi sint et occaecati architecto alias dolorum perspiciatis. Corporis molestiae ad aperiam dolor sapiente iusto illum. Suscipit ut aut corrupti aliquam non commodi est. Aut qui ex consequuntur nulla porro excepturi.",
	"link": "http://clever-bloodflow.info",
	"id": "89"
	},
	{
	"createdAt": "2022-08-01T05:54:08.881Z",
	"title": "Specialist",
	"description": "Alias non velit non consequatur. Eaque hic quo delectus iste voluptas sit omnis perspiciatis sint. Modi sed voluptates perferendis soluta at neque non alias voluptate. Eos quia ullam voluptas saepe repellendus voluptatem. Provident tempora quasi. Provident aut pariatur odit commodi est ipsum quisquam.",
	"link": "https://lame-slave.info",
	"id": "90"
	}
	]
	}


const shallowCom=()=>{
	const store=createStore(CombineReducer(),{ResourseItems:{ResourseItems:{...initalLoader},
		ReError:null}},applyMiddleware(thunk.withExtraArgument(InitalAxios)));
		return store
}
	const wrapperMount=(url,store)=>{
		return mount(<Provider store={store}>
			<MemoryRouter initialEntries={[ url]}>
				  <App/>
			</MemoryRouter>
			</Provider>)
	}
describe('Describe',()=>
{
	let wrapper;
	beforeEach(()=>{
		wrapper=shallowCom()
    })
	it('Mount ResDe',()=>{
		
		let store=shallowCom();
		var wrapper= wrapperMount('/1',store);
		expect(wrapper.find('[data-test="ResourceHeader"]').length).toBe(1)
 	})
	// it('Snapshot testing',()=>{
	// 	const store=shallowCom()
	// 	const tree = renderer
	// 		.create(<Provider store={store}> <MemoryRouter initialEntries={['/2']}>
	// 				  <App/>
	// 			</MemoryRouter>
	// 			</Provider>).toJSON();
	// 	expect(tree).toMatchSnapshot();
	// })

	it('Snapshot testing 2',()=>{
		let store=shallowCom();
		var wrapper= wrapperMount('/1',store);
		
	expect(toJSON( wrapper)).toMatchSnapshot();
	})


	// it('Snapshot testing',()=>{
	// 	const store=shallowCom()
	// 	const tree = renderer
	// 		.create(<Provider store={store}> <MemoryRouter initialEntries={['/1']}>
	// 				  <App/>
	// 			</MemoryRouter>
	// 			</Provider>).toJSON();
	// 	expect(tree).toMatchInlineSnapshot();
	// })
	// it('Snapshot testing',()=>{
	// 	const store=shallowCom()
	// 	const tree = renderer
	// 		.create(<Provider store={store}> <MemoryRouter initialEntries={['/1']}>
	// 				  <App/>
	// 			</MemoryRouter>
	// 			</Provider>).toJSON();
	// 	expect(tree).toMatchInlineSnapshot();
	// })
}
)