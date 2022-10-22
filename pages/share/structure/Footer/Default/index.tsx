import React from 'react'
import { Button } from 'rsuite'
import { socialData } from '../../../data/social'

const Footer: React.FC = () => (
    <div className="container">
        <footer className="w-full text-center mt-8 flex justify-center gap-2">
            <a
                className="text-lg"
                href={socialData.github.link}
                target="_blank"
            >
                <Button color="violet" appearance="primary" size="lg">
                    My GitHub
                </Button>
            </a>
            <a className="text-lg" href={socialData.repo.link} target="_blank">
                <Button color="cyan" appearance="primary" size="lg">
                    This Repo
                </Button>
            </a>
        </footer>
    </div>
)

export { Footer }
