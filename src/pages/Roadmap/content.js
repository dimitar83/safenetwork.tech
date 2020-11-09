export default {
  banner: {
    pageTitle: '~~Не~~Възможната мрежа',
    pageDesc: `14 години работа дават най-после дават резултат, след като съставихме окончателните градивни елементи на това, което някои казваха, че е невъзможно: сигурен достъп за всички.`,
    latestUpdate: {
      overline: 'Последно актуализиране',
      date: '29 август 2019 г.',
      title: 'Трезори Фаза 1',
      para: `Финалното парче на пъзела е завършено и вече имаме Safe CLI, Safe Клиентски библиотеки, Safe Трезор и Safe Браузър.`,
       CTA: {
         name: 'SafeNetwork форум',
         url: 'https://safenetforum.org/t/new-release-vault-phase-1-real-vault/29712'
       }
    }
  },
  releases: {
    release1: {
      overline: 'Актуално',
      title: 'Фаза 1 Трезори',
      para:[
        `Тази версия на Safe Фаза 1 е предимно за показване на мрежовите функции на потребителите (хората, които използват мрежата за сърфиране, споделяне на данни и т.н.) и създателите (разработчиците на програми или тези, които публикуват съдържание). Тя позволява на потребителите да изпробват функции като Safe CLI и Safe Клиентските библиотеки, както и представя новите типове данни.`,
        'Използва се лесно. Просто изтеглете програмата Трезор, който ще работи локално на вашия компютър. Подробности и линкове за сваляне можете да намерите в [тази публикация във форума](https://safenetforum.org/t/new-release-vault-phase-1-real-vault/29712)'
      ],
      // accordion: {
      //   header: [
      //     'The Share Vault Network Feature',
      //     'Description',
      //     'Status'
      //   ],
      //   items: [
      //   ]
      // }
    },
    release2: {
      overline: 'Предстоящ етап',
      title: 'Safe Network Флеминг',
      para: ['Следващият важен етап от Safe мрежата. Освен мрежата със споделен трезор ще представим и самостоятелна мрежа, която ще даде възможност на хората да пускат трезори - за децентрализирано съхранение на информация от домашни компютри. Пускането на Флеминг ще бъде забележимо по много причини, не на последно място и фактът, че при съхранение на данни, мрежата вече ще съдържа и тестов Safecoin.'],
      accordion: {
        header: [
          'Флеминг харектиристики',
          'Описание',
          'Статус'
        ],
        items: [
          {
            feature: 'Само-Удостоверяване',
            desc: 'Възможността за влизане в децентрализирана мрежа без разрешението или съществуването на трета страна',
            status: 'Завършен',
            para: [
              'MaidSafe създаде технологията, която позволява на всеки да влезе в сигурна децентрализирана мрежа, без да изисква разрешение от трета страна. Мрежата със споделен трезор е единственото място в света днес, където можете да видите това в действие.'
            ],
            // CTA: {
            //   name: 'Read More',
            //   url: 'https://safenetwork.tech/roadmap/#self-authentication'
            // },
          }, {
            feature: 'Само-криптиране',
            desc: 'Данните се криптират на вашия компютър, преди да се съхраняват в мрежата: нито един ключ или парола никога не напускат вашето устройство',
            status: 'Завършен',
            para: [
              'Създаден от MaidSafe, това е процесът, при който всеки файл, който се съхранява в мрежата, първо се разбива на парчета, хешира се и след това се криптира. След това тези парчета се криптират още веднъж, като се използва хешът на друг фрагмент от същия файл.'
            ],
            video: {
              url: 'https://s3.eu-west-2.amazonaws.com/ms-marketing/website-videos/Self+Encryption+on+the+SAFE+Network.mp4',
              caption: 'Само-криптиране обяснение'
            }
          }, {
            feature: 'Разделящи се секции',
            desc: 'Процес известен и като шардинг (Sharding), позволяващ на мрежата да се разраства, като разделя отговорностите за конкретни мрежови функции.',
            status: 'Завършен',
            para: [
              'Гарантира, че мрежата може да се разраства, като управлява отговорностите и местоположенията на всеки трезор, без да изисква човешка намеса. Това също действа като мярка за сигурност, за да се гарантира, че нападател не може да избере местоположението или отговорностите си.'
            ],
            CTA: {
              name: 'Прочетете още',
              url: 'https://safenetforum.org/t/step-by-step-the-road-to-fleming-6-disjoint-sections/28530'
            },
          }, {
            feature: 'Реле за съобщения',
            desc: 'Гарантира, че съобщението може да бъде изпратено между трезори в различни секции на мрежата',
            status: 'Завършен',
            para: [
              'Гарантира, че съобщение може да бъде изпратено между възли в различни секции на мрежата. В тази ранна версия всяко съобщение съдържа подписи на членовете на отделните секции, но все още не проверява самите подписи.'
            ],
          },
          {
            feature: 'Стареене на трезорите',
            desc: 'Децентрализирана система за класиране на поведението, производителността и способностите на трезорите в мрежата, която не изисква човешка намеса.',
            status: 'Разработва се',
            para: [
              'Всеки трезор в Safe мрежата получава възраст от самата мрежа. Възрастта нараства всеки път, когато трезор се движи между отделните секции, като само най-старшите (старейшините) имат право да гласуват по време на постигането на консенсус с PARSEC алгоритъма.',
              'Вижте подробностите в RFC и [се присъединете към дискусията](https://forum.safedev.org/t/rfc-45-node-ageing/157) във форума.'
            ],
            CTA: {
              name: 'Прочетете RFC',
              url: 'https://github.com/maidsafe/rfcs/blob/master/text/0045-node-ageing/0045-node-ageing.md'
            },
          }, {
            feature: 'Сигурна доставка на съобщения',
            desc: 'Сигурна комуникация между трезори - съобщения с удостоверен източник',
            status: 'Завършен',
            para: [
              'Гарантира, че съобщенията се изпращат и подписват по такъв начин, че позволява на трезорите да разчитат на съдържанието на всяко съобщение, въпреки че нямат предишни отношения с подателя. Това решава проблем, с който се сблъскват много съществуващи проекти, базирани на блокчейн, и е от съществено значение, когато имате мрежа, която ще мести автономно трезори, каквато е целта ни.'
            ],
            CTA: {
              name: 'Прочетете RFC',
              url: 'https://github.com/maidsafe/rfcs/blob/master/text/0056-secure-message-delivery/0056-secure-message-delivery.md'
            },
          }, {
            feature: 'Надеждна доставка на съобщения',
            desc: 'Комуникация, гарантираща успешната доставка на съобщения.',
            status: 'Завършен',
            para: [
              'Гарантира, че всички изпратени съобщения ще бъдат доставени успешно до техните дестинации, дори когато някои трезори, отговорни за доставката, не успеят.'
            ],
            CTA: {
              name: 'Прочетете RFC',
              url: 'https://github.com/maidsafe/rfcs/blob/master/text/0058-reliable-message-delivery/0058-reliable-message-delivery.md'
            },
          }, {
            feature: 'QUIC-P2P',
            desc: 'Езикът на ниско ниво, който потребителите, свързващи се към SAFE, ще използват за всички мрежови комуникации',
            status: 'Завършен',
            para: [
              'Софтуер, който позволява на компютрите да комуникират по криптиран начин в Safe мрежата. Софтуерът предоставя инфраструктура, през която съобщенията да пътуват, докато слоят за маршрутизация в мрежата определя правилата и посоката на пътуването им.'
            ],
          }, {
            feature: 'Засичане на злонамереност',
            desc: 'Предотвратяване на атаки от злонамерени трезори върху алгоритъма за консенсус',
            status: 'Завършен',
            para: [
              'Начинът, по който трезорите идентифицират злонамерени участници, които увреждат мрежата в дадена секция и механизмът, по който те се съгласяват да ги изхвърлят или да смекчават риска.'
            ],
            CTA: {
              name: 'Прочетете RFC',
              url: 'https://github.com/maidsafe/rfcs/blob/master/text/0050-malice_in_parsec/0050-malice_in_parsec.md'
            }
          }, {
            feature: 'Тестов Safecoin и портфейл',
            desc: 'Позволява на мрежата да таксува, а потребителят да изпраща и получава плащания в портфейла си, в единици, наречени тестови сейфкойни',
            status: 'Завършен',
            para: [
              'Safecoin е механизмът за стимулиране, който насърчава хората да предоставят изчислителните си ресурси, от които мрежата се нуждае: място за съхранение, интернет достъп и процесорно време.',
            ]
          }, {
            feature: 'Фермерство',
            desc: 'Процесът на предоставяне на ресурси и получаване на Safecoin в замяна',
            status: 'В разработка',
            para: [
              'Хората, които решат да предоставят свободните ресурси на компютъра си, които мрежата изисква, имат възможност да получат възнаграждение в Safecoin. Товс гарантира, че мрежата възнаграждава онези, които й предоставят ценни ресурси.',
            ],
          }, {
            feature: 'Трезори от вкъщи',
            desc: 'Възможността всеки да изтегли софтуер и да стартира трезор от дома, създавайки децентрализирано хранилище за мрежата',
            status: 'В разработка',
            para: [
              'Децентрализираното съхранение на данни е ключов елемент от Safe мрежата. Тази версия ще даде възможност на трезорите да участват независимо от предлаганите от тях ресурси.'
            ],
          }, {
            feature: 'Публикувани и непубликувани типове данни',
            desc: 'Ще разреши на мрежата да съхранява публикувани и непубликувани данни чрез AppendOnlyData или MutableData типовете',
            status: 'Завършен',
            para: [
              'Публикуваните данни се отнасят до съдържание, което се публикува (прави се достъпно) за всички, като уебсайтове, блогове или научни документи. За такова обществено съдържание е важно да се пази историята на промените. Историята не трябва да бъде подправяна и публикуваните данни трябва да останат завинаги. Непубликуваните данни са данни, които не е желателно да бъдат публично достояние, като лични данни или данни на организации, съхранявани в мрежата'
            ],
            //CTA: {
              //name: 'Read the RFC',
              //url: 'https://github.com/maidsafe/rfcs/blob/master/text/0054-published-and-unpublished-mutable-data/0054-published-and-unpublished-mutable-data.md'
            //},
          }, {
            feature: 'Непубликувани ImmutableData типове данни',
            desc: 'Подобрява ImmutableData, за да го направи непубликуван или публикуван, с разликата, че непубликуваните данни могат да бъдат изтрити',
            status: 'Завършен',
            para: [
              'Има много ситуации, в които на потребителя ще е необходимо да създаде неизменими данни, за да съхрани частно съдържание. Докато това съдържание не бъде публикувано (предоставено на други хора), то ще може да бъде изтрито само от собственика на данните.'
            ],
            //CTA: {
              //name: 'Read the RFC',
              //url: 'https://github.com/maidsafe/rfcs/blob/master/text/0055-unpublished-immutable-data/0055-unpublished-immutable-data.md'
            //},
          }
        ]
      }
    },
    release3: {
      overline: 'Какво следва',
      title: 'Safe Network Максуел',
      para: ['Safe Максуел версията надгражда над Флеминг и дава възможност на мрежата да се надгражда, подобрява сигурността и поставя основата за превключване от тестов Safecoin към истински Safecoin.'],
      accordion: {
        header: [
          'Максуел характеристики',
          'Описание',
          'Статус'
        ],
        items: [
          {
            feature: 'Спиране на спама',
            desc: 'Възможност за справяне със спам атаки',
            status: 'Концепция',
            para: [
              'Спамът включва трезори, които се опитват да извършват дейности, които не са желани или валидни, и извършвани в мащаб, който е предназначен да задуши мрежата. Мрежата трябва да може да издържа на разумен обем от такива атаки.'
            ],
          }, {
            feature: 'Управление на идентичността',
            desc: 'Възможност за потребителите да създават и управляват множество идентичности за използване в мрежата',
            status: 'Концепция',
            para: [
              'Потребителите ще могат да създават множество самоличности в мрежата. Всяка идентичност ще може да се използва според изискванията на Потребителя и всяка една трябва да бъде независима, освен ако Потребителят изрично не иска да ги свърже. Това помага за защита на идентичността и поверителността.'
            ],
          },
          {
            feature: 'Обновявания',
            desc: 'Възможността на мрежата да се надгражда, без да се поврежда',
            status: 'Концепция',
            para: [
              'Мрежата ще има възможност за надграждане, за да позволи на нови функционалности и подобрения да се разпространяват в цялата мрежа. Надстройките трябва да се правят по такъв начин, че да не причиняват вреда на мрежата.',
              'Това е важен етап от развитието на мрежата, тъй като това означава, че новият софтуер може да продължи да се разгръща в съществуващата мрежа, без да нарушава съществуващата функционалност.'
            ],
            CTA: {
              name: 'Проследете дискусията',
              url: 'https://safenetforum.org/t/step-by-step-the-road-to-fleming-5-network-upgrades/28319'
            }
          }
        ]
      }
    },
    release4: {
      overline: 'Очаквайте скоро',
      title: 'Очаквани функции на мрежата',
      para: ['Следния списък представя оставащата работа за завършването на мрежата. Списъкът не трябва да се разглежда като фиксиран по никакъв начин, тъй като в определени случаи работата ще се извършва паралелно от различни екипи.'],
      accordion: {
        header: [
          'Характеристика',
          'Описание',
          'Статус'
        ],
        items: [
          {
            feature: 'Secure Enclaves',
            desc: 'A trusted executable environment within existing computers',
            status: 'Concept',
            para: [
              'Creates an area within the hardware of a computer that is a secure, trusted environment that stands separate from the rest of the computer. It functions like a mini-computer inside existing computers that cannot be opened.'
            ],
          }, {
            feature: 'Network Growth',
            desc: 'Allow the network to grow and scale in a sustainable way',
            status: 'Concept',
            para: [
              'The Network allows controlled growth to ensure that the majority of decision-makers are healthy nodes that follow the rules of the Network. This growth should be sustainable in order to avoid unnecessary mergers between Sections.'
            ],
          }, {
            feature: 'Network Restarts',
            desc: 'Ability for the network to restart after a catastrophe',
            status: 'Concept',
            para: [
              'In the event of a catastrophic outage, the Network should be able to rebuild itself because it maintains the integrity of essential data (such as chain history) which enables it to start functioning again on the basis of the last known state of the Network.'
            ],
          }, {
            feature: 'RDF Support',
            desc: 'The Network will have native support for RDF, enabling data to be compatible with the Semantic Web',
            status: 'RFC',
            para: [
              'Ensures that data on the SAFE Network is stored in such a way that the format can be understood by other Semantic Web projects, such as Solid.'
            ],
            CTA: {
              name: 'Read the RFC',
              url: 'https://github.com/nbaksalyar/rfcs/blob/master/text/0000-rdf-in-client-libs/0000-rdf-in-client-libs.md'
            },
          }, {
            feature: 'Obfuscating stored data',
            desc: 'All data stored within a Vault on an individual’s computer must be entirely encrypted and unreadable',
            status: 'Concept',
            para: [
              'Ensures that even the smallest piece of data that is stored in a Vault cannot be read by the person controlling the computer on which it is stored.'
            ],
          }, {
            feature: 'Common Coin',
            desc: 'Replace our concrete coin with a common coin to make PARSEC fully asynchronous',
            status: 'Design',
            para: [
              'Common coin is a device that nodes can use to generate a “random” binary value (true or false). Every time a node flips the coin, all other nodes are guaranteed to observe the same value for their coin flip. Also, the value must be unpredictable, which means that no malicious node can know the outcome before a honest node has observed it.'
            ],
          }
        ]
      }
    }
  },
  apps: {
    title: 'Apps and User Experience',
    list: [
      {
        id: 'safeBrowser',
        name: 'SAFE Browser',
        para: 'The latest release includes some of the beginnings of the Perpetual Web, as well as the Authenticator: enabling you to securely sign in to the SAFE Network, and manage access and permissions of SAFE Apps.',
        status: 'Latest Version v0.15.2'
      }
    ],
    currentMilestone: {
      status: 'Current Milestone',
      title: 'The Perpetual Web',
      para: 'The SAFE Network is designed to ensure that public data is permanent and can never be deleted. Individuals and groups can choose to keep their data private, but once it’s been published, it will remain permanently available. This milestone aims to showcase the incredible power of this facet of the Network, by building out the User Experience, and iterating on it right through to launch.',
      accordion: {
        header: [
          'Milestone Features',
          'Description',
          'Status'
        ],
        items: [
          {
            feature: 'SAFE Browser',
            desc: 'Enhancements to the browser designed specifically to take advantage of the functionalities of the Perpetual Web',
            status: 'Development',
            para: [
              'The SAFE Browser functionality will be extended to incorporate new features that are unique to the Perpetual Web, such as the ability to roll-back through the version history of any SAFE website or asset.'
            ],
          },
          {
            feature: 'Mobile Browser',
            desc: 'Mobile version of SAFE browser which is limited to browsing published data from the SAFE Network',
            status: 'Complete',
            para: [
              'Enables individuals to access the SAFE Network directly by using a browser on their mobile phone'
            ],
          },
          {
            feature: 'Data Manager',
            desc: 'Streamlined publishing of SAFE sites and Perpetual Data',
            status: 'Development',
            para: [
              'A suite of tools which provides the necessary functionality to add data to the SAFE Network, publish perpetual data, and manage Public Names. This will supersede the Web Hosting Manager.'
            ],
          },
          {
            feature: 'SAFE CLI',
            desc: 'An advanced CLI to manage accounts and data',
            status: 'Development',
            para: [
              'A command line tool to manage data on the SAFE Network. It will allow the user to store data on the network and manage accounts, identities, and permissions. This is the tool that the frontend apps and features—such as the Data Manager—will build upon.'
            ],
          },
          {
            feature: 'Public Name System',
            desc: 'Content stored should be accessible with human-readable URLs, via a decentralised domain name system: the Public Name System',
            status: 'RFC',
            para: [
              'A domain name system translates numerical IP addresses into a format that can be read by humans (eg. http//216.58.206.35 resolves to Google.com). The current web relies on a centralised organisation to maintain that record. The SAFE Network requires this process to be outside the control of a single party in order to avoid censorship and repression.'
            ],
            CTA: {
              name: 'Read the RFC',
              url: 'https://github.com/maidsafe/rfcs/issues/283'
            },
          },
        ]
      }
    },
    upcomingMilestones: {
      status: 'Upcoming Milestones',
      list: [
        {
          title: 'Private Communications',
          para: 'If we want a world in which individuals can communicate freely whenever they choose, privacy is essential. This milestone aims to deliver just that.',
          accordion: {
            header: [
              'Milestone Features',
              'Description',
              'Status'
            ],
            items: [
              {
                feature: 'Private Messaging',
                desc: 'Send secure private messages between clients',
                status: 'Concept',
                para: [
                  'One of the most sought after features of the SAFE Network: secure, private, instant messaging.'
                ],
              },
              {
                feature: 'Identity Management',
                desc: 'Ability for users to create and manage multiple identities',
                status: 'Concept',
                para: [
                  'Improves the user experience for individuals as they switch between the identities (or profiles) that they choose to represent themselves with on the SAFE Network, without the need to create multiple accounts.'
                ],
              },
              {
                feature: 'Contacts Management',
                desc: 'Find, connect and stay up-to-date with other SAFE Network users  ',
                status: 'Concept',
                para: [
                  'Enables SAFE users to find and connect with other people across a range of applications in a consistent way.'
                ],
              },
            ]
          }
        },
        {
          title: 'Take Control of Your Data',
          para: 'The SAFE Network turns the current data ownership model on its head. Personal information will no longer be stored on corporate servers. Self Authentication gives you complete control over your data. You can grant (and revoke) permission for apps to use your data at any time and prevent any unauthorised company or third party ever gaining access.',
          accordion: {
            header: [
              'Milestone Features',
              'Description',
              'Status'
            ],
            items: [
              {
                feature: 'Data Manager',
                desc: 'Fine-grained management of your personal data',
                status: 'Concept',
                para: [
                  'The extension of the Data Manager tool to allow fine-grained control by individuals over their private and unpublished data.'
                ],
              },
              {
                feature: 'RDF Support',
                desc: 'Support storing and querying RDF resources in SAFE-Core',
                status: 'RFC',
                para: [
                  'Ensures that the SAFE Network understands a way of describing the architecture of data that is understood by other projects, such as Solid'
                ],
                CTA: {
                  name: 'Read the RFC',
                  url: 'https://github.com/maidsafe/rfcs/issues/289'
                },
              },
              {
                feature: 'SPARQL Support',
                desc: 'Add native support for SPARQL to allow searching of data',
                status: 'Concept',
                para: [
                  'Enhances the functionality of SAFE by adding SPARQL support to SAFE Client Libs and SAFE Vault.  This ensures that the Network can understand a well-known semantic query language, and enables users to search.'
                ],
              },
              {
                feature: 'Collaboration',
                desc: 'Tools to enable collaboration through sharing and group permissions on private unpublished data',
                status: 'Concept',
                para: [
                  'Manage sharing and permissions of private, unpublised data and files, for collaboration between individuals and groups. '
                ],
              },
              {
                feature: 'XOR URLs',
                desc: 'A way of sharing and accessing SAFE Network files without the need for a Public Name',
                status: 'Complete',
                para: [
                  'Create a system of standardised URL’s on the SAFE Network that are based on the XOR address of the content being referenced. Ensures that individuals can access and locate  data and files in a more user-friendly manner.'
                ],
              }
            ]
          }
        },
        {
          title: 'The New Digital Economy',
          para: 'The new digital economy is all about ensuring that you no longer pay for your digital life with data. Instead, you use a cryptocurrency that’s integral and distributed by the SAFE Network. You earn value in return for providing resources to the Network.',
          accordion: {
            header: [
              'Milestone Features',
              'Description',
              'Status'
            ],
            items: [
              {
                feature: 'Test Safecoin Wallet',
                desc: 'Transact using Test Safecoins',
                status: 'Development',
                para: [
                  'Users will be able to use Test Safecoin in the Network, allowing an ecosystem to built around the SAFE incentive mechanism. The ability to create multiple wallets, associate them with an identity, and also one-time-use wallets to enable anonymous transactions, will all be part of this.',
                ],
              },
              {
                feature: 'Vault User Interface',
                desc: 'Easily set up, run, and manage a Vault',
                status: 'Concept',
                para: [
                  'Users will see greatly-improved Vault User Experience. Anyone providing storage to the Network can expect to see a number of usability improvements, making it easy to offer resources and start farming on everyday home computers and devices.'
                ],
              },
            ]
          }
        }
      ]
    }
  }
}
