import {
  Box, useColorModeValue, Stack, Grid,
} from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { unSlugify } from '../../utils/index';
import Heading from '../../common/components/Heading';
import Link from '../../common/components/NextChakraLink';
import Image from '../../common/components/Image';
import TagCapsule from '../../common/components/TagCapsule';
import Text from '../../common/components/Text';

const ProjectList = ({
  projects, contextFilter, projectPath, pathWithDifficulty, exampleImage,
  withoutImage,
}) => {
  const { t } = useTranslation('common');
  // const [limiter, setLimiter] = useState(12);
  const arrOfTechs = contextFilter.technologies;
  const { difficulty, videoTutorials } = contextFilter;
  const router = useRouter();
  const defaultImage = exampleImage || '/static/images/code1.png';
  const { query } = router;
  const techTagsQuery = (query.techs && decodeURI(query.techs?.toLocaleLowerCase())?.split(',')) || false;
  const withVideoQuery = query.withVideo || false;
  const difficultyQuery = query.difficulty || false;

  // const bgBlur = '/static/images/codeBlur.png';

  // const projectLimited = projects.slice(0, limiter);

  const checkIsPathDifficulty = (thisDifficulty) => (pathWithDifficulty ? `/${thisDifficulty}` : '');

  const contains = (project, selectedTechs) => {
    // search with title and slug
    const projectTitle = project.title.toLowerCase() || unSlugify(project.slug);
    if (
      typeof videoTutorials === 'boolean'
      && (withVideoQuery || videoTutorials === true)
      && !project.solution_video_url === true
    ) return false;
    if (typeof query.search === 'string' && !projectTitle.includes(query.search)) return false;
    if ((typeof difficulty === 'string'
      && project.difficulty !== difficulty)
      || (difficultyQuery && project.difficulty !== difficultyQuery)) return false;
    // Match checked technologies
    const res = (techTagsQuery || selectedTechs.length > 0) ? (
      (techTagsQuery || selectedTechs).some((tech) => project.technologies.includes(tech))
    ) : true;
    return res;
    // const res = selectedTechs.map((techs) => project.technologies.includes(techs));
    // if response not match with current checked technologies return false
    // return !res.includes(false);
  };

  const filteredProjects = projects.filter(
    (project) => contains(project, arrOfTechs),
  );

  const onImageNotFound = (event) => {
    event.target.setAttribute('src', defaultImage);
    event.target.setAttribute('srcset', `${defaultImage} 1x`);
  };
  return (
    <>
      <Grid
        gridTemplateColumns={{
          base: 'repeat(auto-fill, minmax(15rem, 1fr))',
          md: 'repeat(auto-fill, minmax(20rem, 1fr))',
        }}
        gridGap="12px"
      >
        {filteredProjects.map((ex) => {
          const getImage = ex.preview || defaultImage;
          return (
            <Box
              py={2}
              key={`${ex.slug}-${ex.difficulty}`}
              border={useColorModeValue('1px solid #DADADA', 'none')}
              className="card pointer"
              bg={useColorModeValue('white', 'gray.800')}
              // transition="transform .3s ease-in-out"
              // _hover={{
              //   transform: 'scale(1.05)',
              //   boxShadow: '0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06)',
              // }}
              borderRadius="16px"
              padding="22px"
            >
              <Box
                display={{ base: 'flex', md: 'inline-block' }}
                gridGap="15px"
                role="group"
                w="full"
                zIndex={1}
                borderRadius="10px"
              >
                {withoutImage && (
                  <Heading
                    size="m"
                    textAlign="left"
                    wordBreak="break-word"
                    width="100%"
                    fontFamily="body"
                    fontWeight={700}
                  >
                    {ex.title || t('no-title')}
                  </Heading>
                )}
                {/* CARD IMAGE */}
                {!withoutImage && (
                  <Link
                    href={`/${projectPath}${checkIsPathDifficulty(ex.difficulty)}/${ex.slug}`}
                    display="inline-block"
                    w={{ base: 'auto', md: 'full' }}
                    zIndex={1}
                    borderRadius="15px"
                  >
                    <Image
                      priority
                      borderRadius="15px"
                      classNameImg="centerImageForBlur"
                      pos="relative"
                      height={{ base: '60px', sm: '90px', md: '180px' }}
                      width={{ base: '60px', sm: '90px', md: 'auto' }}
                      maxWidth={{ base: '300px', sm: '230px', md: 'none' }}
                      // _after={{
                      //   transition: 'all .8s ease',
                      //   content: '""',
                      //   w: 'full',
                      //   h: 'full',
                      //   pos: 'absolute',
                      //   top: 0,
                      //   left: 0,
                      //   backgroundImage: `url(${bgBlur})`,
                      //   filter: 'blur(15px)',
                      //   zIndex: 0,
                      // }}
                      // _groupHover={{
                      //   _after: {
                      //     filter: 'blur(50px)',
                      //   },
                      // }}
                      onError={(e) => onImageNotFound(e)}
                      style={{ borderRadius: '15px', overflow: 'hidden' }}
                      objectFit="cover"
                      src={getImage}
                      alt={ex.title}
                    />
                  </Link>
                )}
                <Box display="flex" flexDirection="column" paddingTop="4px">
                  {ex.technologies.length >= 1 && (
                    <TagCapsule
                      tags={ex.technologies}
                      variant="rounded"
                      borderRadius="10px"
                      marginY="8px"
                      style={{
                        padding: '4px 10px',
                        margin: '0',
                      }}
                      gap="10px"
                      paddingX="0"
                      key={`${ex.slug}-${ex.difficulty}`}
                    />
                  )}

                  {!withoutImage && (
                    <Stack align="center" padding="18px 0 0 0">
                      <Link
                        href={`/${projectPath}${checkIsPathDifficulty(ex.difficulty)}/${ex.slug}`}
                        display="inline-block"
                        w="full"
                        zIndex={1}
                        color="blue.default"
                      >
                        <Heading
                          size="20px"
                          textAlign="left"
                          wordBreak="break-word"
                          width="100%"
                          fontFamily="body"
                          fontWeight={700}
                        >
                          {ex.title || t('no-title')}
                        </Heading>
                      </Link>
                    </Stack>
                  )}

                  {withoutImage && ex?.description && (
                    <Text
                      color="gray.500"
                      textAlign="left"
                      width="100%"
                      size="sm"
                      textTransform="uppercase"
                    >
                      {ex.description}
                    </Text>
                  )}

                  <Link
                    pt="8px"
                    width="fit-content"
                    href={`/${projectPath}${checkIsPathDifficulty(ex.difficulty)}/${ex.slug}`}
                    display="inline-block"
                    zIndex={1}
                    color="blue.default"
                    fontSize="15px"
                    letterSpacing="0.05em"
                  >
                    {'Read Lesson >'}
                  </Link>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Grid>
      {filteredProjects.length === 0 && (
        <Box height="50vh" width="100%">
          <Text size="20px" padding="30px 0" textAlign="center" fontWeight={500}>
            {t('search-not-found')}
          </Text>
        </Box>
      )}
      {/* {projects.length >= limiter && (
        <Button variant="default" onClick={() => setLimiter(limiter + 12)}>
          load more
        </Button>
      )} */}
    </>
  );
};

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
  contextFilter: PropTypes.objectOf(PropTypes.any).isRequired,
  projectPath: PropTypes.string.isRequired,
  pathWithDifficulty: PropTypes.bool,
  exampleImage: PropTypes.string,
  withoutImage: PropTypes.bool,
};

ProjectList.defaultProps = {
  pathWithDifficulty: false,
  exampleImage: '',
  withoutImage: false,
};

export default ProjectList;
