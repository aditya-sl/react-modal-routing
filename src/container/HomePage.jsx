import { useState } from 'react';
import Modal from '../components/Modal';

const HomePage = () => {
	const [modal, setModal] = useState(false);

	const handleOpen = () => {
		setModal(true);
	};

	const handleClose = () => {
		setModal(false);
	};

	return (
		<div>
			<button onClick={handleOpen}>Modal</button>
			{modal && <Modal onClose={handleClose} />}
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste aliquid
				laboriosam dolorem dolores quia necessitatibus delectus molestiae iusto
				veniam voluptate corrupti, eveniet officiis quisquam odit accusamus
				facere eaque! In et, tempora beatae fugit culpa assumenda neque sed
				tenetur nemo quibusdam non dolorum earum fugiat perspiciatis mollitia
				est reiciendis ducimus, saepe quia voluptatum distinctio eveniet!
				Cupiditate hic voluptate dolore sapiente illum, placeat officia beatae
				quaerat eum tempore facere? Sunt, doloremque enim fuga ut laborum modi
				ducimus quia iure quod debitis inventore at consequuntur voluptatem unde
				magnam saepe quo magni in ipsa sit iste ex omnis dolorum ipsam. Dolore
				doloribus beatae, iste, quis nihil, qui suscipit obcaecati perspiciatis
				quae alias quam placeat amet incidunt nobis. Quis ut, nostrum repellat
				cum cumque est suscipit quidem. Ipsam, ducimus molestias recusandae at
				laborum nihil earum hic asperiores officia, pariatur sequi culpa vitae
				sapiente nesciunt rerum doloremque perspiciatis id ad. Perferendis
				cupiditate veritatis laboriosam, est perspiciatis ipsa mollitia, ea
				dolor quae itaque modi natus nam ipsam excepturi temporibus tempora eius
				magnam similique nemo quas eum provident ab quo. Officia enim laborum
				dolorem asperiores sapiente consectetur a explicabo porro dolor,
				perferendis delectus aliquid itaque nemo ab magnam, ad consequatur
				expedita, fuga corporis dignissimos alias natus ea quisquam laboriosam.
				Voluptas, autem. Voluptate, magni. Illum corrupti animi omnis molestiae
				quos dolore eveniet a quidem facilis, et labore possimus, sequi illo
				esse, sed debitis delectus minima. Illum voluptate nobis recusandae
				dolor beatae voluptates nisi deserunt itaque sapiente. Similique facilis
				explicabo laboriosam perspiciatis, itaque numquam magnam. Corporis
				quidem doloremque necessitatibus magnam odio excepturi nam aliquid
				maxime dolore? Voluptas officiis, natus repellat amet ipsam culpa
				debitis sit asperiores, id corrupti dignissimos, facilis veniam alias!
				Deserunt eaque temporibus accusamus modi incidunt dolores ullam labore
				quam, veritatis, sequi animi quasi repudiandae iusto? Non debitis
				commodi voluptates, tempore explicabo eaque. Et placeat autem libero
				distinctio dolor itaque. Ullam repellendus officiis cupiditate magni
				doloremque porro quasi aliquid alias ratione placeat iure error suscipit
				tempore praesentium, rerum provident necessitatibus id. Rem mollitia
				iure ipsam doloribus ipsum cupiditate praesentium dolores facere unde
				ratione veritatis, corporis, delectus, eveniet maxime sunt. Vero, neque.
				Ea asperiores et libero perspiciatis temporibus fugiat adipisci
				blanditiis dolorem voluptatibus ratione atque reiciendis, laudantium
				eaque eos alias ullam exercitationem sed voluptates, repudiandae totam
				pariatur a voluptate. Blanditiis culpa eum cupiditate commodi quas
				distinctio qui dignissimos similique repudiandae, inventore totam
				doloribus velit praesentium tempore sit dicta dolore, cumque corporis
				nulla enim minus. Quos veniam fugit laboriosam iure modi, assumenda
				impedit, quod cum beatae deserunt voluptatum pariatur, et id ullam
				aspernatur labore totam error aperiam iste magnam distinctio
				praesentium. Illum optio commodi accusamus voluptas tempora. At itaque
				earum nihil nesciunt eligendi cumque dolorem molestias ratione velit
				reprehenderit. Consectetur nisi atque labore dicta. Possimus numquam
				tempora quia ut impedit modi recusandae facilis nihil iste laboriosam
				veritatis iusto consequatur, voluptas doloremque totam molestias vel
				esse repellendus quae maiores temporibus? A provident tempora quas
				suscipit. Eveniet assumenda commodi mollitia dicta nemo, voluptatem
				molestiae illo recusandae magni ipsum eligendi iure sequi quod maxime,
				veritatis temporibus obcaecati in omnis. Ut maxime consequatur quaerat
				odit cupiditate architecto illum explicabo libero labore maiores? Error
				non alias, asperiores ratione quae aperiam quis consequatur nobis atque
				quia, dolor assumenda natus debitis voluptate. Quod, corporis aspernatur
				iure est dicta fugit eaque voluptates dolorem voluptatem blanditiis,
				nobis reiciendis iusto, molestiae nostrum! Perspiciatis velit, accusamus
				voluptate reprehenderit incidunt illum cum ducimus ipsum fuga laborum
				nisi natus odit qui nobis tenetur architecto labore nostrum dolorum
				quasi accusantium error rem aliquid? Aut adipisci architecto, ipsum
				beatae porro possimus itaque provident a ut eligendi maiores laborum,
				eos, cum assumenda tempore? Temporibus est repellat quasi error labore
				doloremque ducimus odio cupiditate ullam, incidunt maiores placeat
				harum, magnam sapiente quas corrupti quos. Incidunt possimus at quaerat
				odit minima alias fugit, iusto nihil nulla consequuntur asperiores
				voluptatibus quo totam voluptates necessitatibus omnis numquam, atque
				deleniti quam inventore libero facilis corporis mollitia quibusdam. Illo
				rem animi aperiam, dolorum doloremque ratione. Nihil ipsum tenetur,
				porro perspiciatis aperiam ex sequi obcaecati vero et earum tempore
				ipsam accusamus neque maxime perferendis rem. Exercitationem ipsam,
				laboriosam molestias ab repellat facilis atque dicta laudantium placeat
				inventore consequatur et iure sunt, alias iste rem at ad quod ratione!
				Ipsa quo ratione accusantium accusamus cum vitae, et cumque, fuga odio
				nihil harum voluptas odit, debitis vero similique tempore eum quisquam
				nam laborum est veniam omnis commodi atque rem. Doloribus maiores nam
				reiciendis omnis magni odit velit commodi qui expedita sequi. Unde, aut
				aliquam hic dolorum nemo eos necessitatibus quibusdam iure, veniam natus
				soluta sit eum delectus voluptates vel voluptatibus officia explicabo,
				alias accusamus cupiditate! Libero quisquam, quas adipisci tenetur
				dolores alias provident distinctio quaerat voluptatum! Aliquid itaque
				recusandae sint minus, quo esse nam placeat? Soluta eos minima repellat
				reprehenderit ipsum veritatis nesciunt vel tempore doloremque commodi
				saepe modi laborum explicabo magnam earum ipsam vitae, quia omnis
				pariatur! Optio quis molestias ullam reprehenderit minima. Odit minus
				quia itaque, aliquid quas placeat id sit, ex commodi labore perferendis
				optio rem unde fugiat repellendus accusantium fugit dolores earum
				aspernatur suscipit similique tempora doloremque numquam! Amet harum
				quam sapiente obcaecati, eaque molestiae sequi et corporis id dolore
				itaque minima ex laboriosam architecto sunt! Totam suscipit voluptas
				vero id! Minima eum commodi veritatis perspiciatis voluptate natus ipsam
				autem accusamus officia quo voluptatum maxime, quod et tempora,
				assumenda sit deleniti hic rerum. Debitis, sapiente. Quas, expedita qui
				culpa rerum ex voluptates amet nisi praesentium est voluptatem nesciunt
				quis, aliquam repellendus deserunt excepturi reprehenderit! Corporis vel
				eos cupiditate deleniti! Perferendis a suscipit amet dicta quis
				laudantium esse dolore non laborum, eaque tempora sint nesciunt
				voluptatum cum distinctio temporibus. Numquam dicta sed repellendus,
				aspernatur nostrum similique, consequuntur aut itaque laboriosam
				nesciunt ipsam? Expedita ex nihil cum eos a, deleniti quidem voluptatum,
				nulla tempora error architecto sed accusantium possimus deserunt laborum
				quasi. Dicta maiores error in ipsa, exercitationem ratione rerum totam
				nemo sit. Corporis ducimus eum fugit consectetur est a nostrum eligendi
				officiis quidem, iure itaque et dolores tempora aliquam cumque eveniet
				incidunt excepturi doloremque voluptate laudantium magni sunt accusamus!
				Fuga tempore nihil nisi fugit ducimus, ex quisquam molestiae harum
				explicabo cum recusandae?
			</p>
		</div>
	);
};

export default HomePage;
